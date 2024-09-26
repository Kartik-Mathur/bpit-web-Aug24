let entries = [];

const entryForm = document.getElementById('entryForm');
const entriesTable = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
const totalIncomeElement = document.getElementById('totalIncome');
const totalExpensesElement = document.getElementById('totalExpenses');
const balanceElement = document.getElementById('balance');
const filterType = document.getElementById('filterType');
const filterCategory = document.getElementById('filterCategory');

entryForm.addEventListener('submit', addEntry);
filterType.addEventListener('change', updateTable);
filterCategory.addEventListener('change', updateTable);

function addEntry(e) {
    e.preventDefault();
    
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;

    const entry = { description, amount, type, category };
    entries.push(entry);

    updateTable();
    updateSummary();
    entryForm.reset();
}

function updateTable() {
    entriesTable.innerHTML = '';
    const typeFilter = filterType.value;
    const categoryFilter = filterCategory.value;

    entries.forEach((entry, index) => {
        if ((typeFilter === 'all' || entry.type === typeFilter) &&
            (categoryFilter === 'all' || entry.category === categoryFilter)) {
            const row = entriesTable.insertRow();
            row.innerHTML = `
                <td>${entry.description}</td>
                <td>$${entry.amount.toFixed(2)}</td>
                <td>${entry.type}</td>
                <td>${entry.category}</td>
                <td>
                    <button onclick="editEntry(${index})">Edit</button>
                    <button onclick="deleteEntry(${index})">Delete</button>
                </td>
            `;
        }
    });
}

function updateSummary() {
    const totalIncome = entries
        .filter(entry => entry.type === 'income')
        .reduce((sum, entry) => sum + entry.amount, 0);

    const totalExpenses = entries
        .filter(entry => entry.type === 'expense')
        .reduce((sum, entry) => sum + entry.amount, 0);

    const balance = totalIncome - totalExpenses;

    totalIncomeElement.textContent = `$${totalIncome.toFixed(2)}`;
    totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
    balanceElement.textContent = `$${balance.toFixed(2)}`;
}

function editEntry(index) {
    const entry = entries[index];
    document.getElementById('description').value = entry.description;
    document.getElementById('amount').value = entry.amount;
    document.getElementById('type').value = entry.type;
    document.getElementById('category').value = entry.category;

    entries.splice(index, 1);
    updateTable();
    updateSummary();
}

function deleteEntry(index) {
    entries.splice(index, 1);
    updateTable();
    updateSummary();
}


updateTable();