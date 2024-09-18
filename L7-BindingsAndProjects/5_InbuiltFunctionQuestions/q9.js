const sales = [
    { id: 1, product: "Laptop", category: "Electronics", price: 999.99, quantity: 1, date: "2023-05-01" },
    { id: 2, product: "Smartphone", category: "Electronics", price: 699.99, quantity: 2, date: "2023-05-02" },
    { id: 3, product: "Headphones", category: "Electronics", price: 199.99, quantity: 3, date: "2023-05-03" },
    { id: 4, product: "Running Shoes", category: "Sports", price: 89.99, quantity: 1, date: "2023-05-03" },
    { id: 5, product: "Coffee Maker", category: "Home", price: 79.99, quantity: 1, date: "2023-05-05" },
    { id: 6, product: "Yoga Mat", category: "Sports", price: 29.99, quantity: 2, date: "2023-05-06" },
    { id: 7, product: "Blender", category: "Home", price: 39.99, quantity: 1, date: "2023-05-06" },
    { id: 8, product: "Watch", category: "Electronics", price: 299.99, quantity: 1, date: "2023-05-02" },
    { id: 9, product: "T-shirt", category: "Clothing", price: 19.99, quantity: 3, date: "2023-05-09" },
    { id: 10, product: "Backpack", category: "Accessories", price: 49.99, quantity: 1, date: "2023-05-10" }
];

// Map to date and daily total, reduce to group by date, then find maximum.
/*let dateWiseProducts = sales.reduce((result, product) => {
    if (!result[product.date]) {
        result[product.date] = [];
    }
    result[product.date].push(product);
    return result;
}, {});

console.log(dateWiseProducts);
*/

let dateWiseProductsSale = sales.reduce((result, product) => {
    if (!result[product.date]) {
        result[product.date] = 0;
    }
    result[product.date] += product.quantity * product.price;
    return result;
}, {});
console.log(dateWiseProductsSale)
console.log(Object.entries(dateWiseProductsSale))
// let highestSaleInfo = Object.entries(dateWiseProductsSale).reduce((max, [date, price]) => {
//     if(price>max.price) return {
//         date,
//         price
//     }
//     return max;
// },{
//     date:'',
//     price:0
// })

let highestSaleInfo = Object.entries(dateWiseProductsSale).reduce((max, item) => {
    if(item[1]>max.price) return {
        date:item[0],
        price:item[1]
    }
    return max;
},{
    date:'',
    price:0
})

console.log(highestSaleInfo);