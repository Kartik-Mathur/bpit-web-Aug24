let entries = [];

const entryForm = document.getElementById('entryForm');
const entriesTable = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
const totalIncomeElement = document.getElementById('totalIncome');
const totalExpensesElement = document.getElementById('totalExpenses');
const balanceElement = document.getElementById('balance');
const filterType = document.getElementById('filterType');
const filterCategory = document.getElementById('filterCategory');

entryForm.addEventListener('submit', addEntry);

function renderEntries() {
    entriesTable.innerHTML = '';
    const filterTypeValue = filterType.value;
    const filterCategoryValue = filterCategory.value;

    entries.forEach((entry, index) => {
        if (
            (filterCategoryValue === "all" || entry.category === filterCategoryValue) &&
            (filterTypeValue === 'all' || filterTypeValue === entry.value)) {
            const row = entriesTable.insertRow();
            row.innerHTML = `           
            <td>${entry.description}</td>
            <td>$${entry.amount}</td>
            <td>${entry.type}</td>
            <td>${entry.category}</td>
            <td>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>`;
        }
    })
    entryForm.reset();
}

function addEntry(e) {
    e.preventDefault();
    const description = document.querySelector('#description').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const type = document.querySelector('#type').value.trim();
    const category = document.querySelector('#category').value.trim();

    console.log(description, amount, type, category);
    if (description && amount && type && category) {
        const entry = {
            description,
            amount,
            type,
            category
        }
        entries.push(entry);
        renderEntries();
    }
}