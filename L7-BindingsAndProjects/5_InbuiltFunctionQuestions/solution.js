const sales = [
    { id: 1, product: "Laptop", category: "Electronics", price: 999.99, quantity: 1, date: "2023-05-01" },
    { id: 2, product: "Smartphone", category: "Electronics", price: 699.99, quantity: 2, date: "2023-05-02" },
    { id: 3, product: "Headphones", category: "Electronics", price: 199.99, quantity: 3, date: "2023-05-03" },
    { id: 4, product: "Running Shoes", category: "Sports", price: 89.99, quantity: 1, date: "2023-05-04" },
    { id: 5, product: "Coffee Maker", category: "Home", price: 79.99, quantity: 1, date: "2023-05-05" },
    { id: 6, product: "Yoga Mat", category: "Sports", price: 29.99, quantity: 2, date: "2023-05-06" },
    { id: 7, product: "Blender", category: "Home", price: 39.99, quantity: 1, date: "2023-05-07" },
    { id: 8, product: "Watch", category: "Electronics", price: 299.99, quantity: 1, date: "2023-05-08" },
    { id: 9, product: "T-shirt", category: "Clothing", price: 19.99, quantity: 3, date: "2023-05-09" },
    { id: 10, product: "Backpack", category: "Accessories", price: 49.99, quantity: 1, date: "2023-05-10" }
];

// Answer:1
let ElectronicsItem = sales.filter((item) => item.category === "Electronics");
console.log(ElectronicsItem);

// Answer:2
let productSales = sales.map((item) => {
    return {
        name: item.product,
        totalPrice: item.price * item.quantity
    }
});
console.log(productSales)

// Answer:3
// let totalSalePrice =
//     sales.map((item) => {
//         return {
//             name: item.product,
//             totalPrice: item.price * item.quantity
//         }
//     }).reduce((acc, item) => {
//         return acc + item.totalPrice
//     }, 0)

let totalSalePrice =
    sales.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

console.log(totalSalePrice.toFixed(2));


// Q5. Solution
let data = sales.reduce((categorisedItems, val) => {
    if (!categorisedItems[val.category]) {
        categorisedItems[val.category] = [];
    }
    categorisedItems[val.category].push(val);

    return categorisedItems;
}, {})

// Q6. Solution
let electronicsItems = data["Electronics"];
console.log(electronicsItems)
let electronicsSale = electronicsItems.reduce((acc, item) => {
    return acc + (item.price) * (item.quantity);
}, 0);

console.log(electronicsSale.toFixed(2));