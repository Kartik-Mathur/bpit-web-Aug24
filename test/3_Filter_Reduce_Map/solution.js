// Sample sales data
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
  
  // Problem 1: Use filter to get all electronics sales
  console.log("Problem 1: Electronics Sales");
  
  const electronicsSales = sales.filter(sale => sale.category === "Electronics");
  console.log(electronicsSales);
  
  // Problem 2: Use map to create a list of all products sold
  console.log("\nProblem 2: List of Products Sold");
  
  const productsSold = sales.map(sale => sale.product);
  console.log(productsSold);
  
  // Problem 3: Use reduce to calculate the total revenue
  console.log("\nProblem 3: Total Revenue");
  
  const totalRevenue = sales.reduce((total, sale) => total + (sale.price * sale.quantity), 0);
  console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);
  
  // Problem 4: Use filter and map to get the names of products that sold more than one unit
  console.log("\nProblem 4: Products with Multiple Units Sold");
  
  const multipleUnitProducts = sales
    .filter(sale => sale.quantity > 1)
    .map(sale => sale.product);
  console.log(multipleUnitProducts);
  
  // Problem 5: Use reduce to group sales by category
  console.log("\nProblem 5: Sales Grouped by Category");
  
  const salesByCategory = sales.reduce((grouped, sale) => {
    if (!grouped[sale.category]) {
      grouped[sale.category] = [];
    }
    grouped[sale.category].push(sale);
    return grouped;
  }, {});
  console.log(salesByCategory);
  
  // Problem 6: Use filter, map, and reduce to get the total revenue from electronics
  console.log("\nProblem 6: Total Revenue from Electronics");
  
  const electronicsRevenue = sales
    .filter(sale => sale.category === "Electronics")
    .map(sale => sale.price * sale.quantity)
    .reduce((total, saleTotal) => total + saleTotal, 0);
  console.log(`Total Electronics Revenue: $${electronicsRevenue.toFixed(2)}`);
  
  // Problem 7: Use map and reduce to find the most expensive product
  console.log("\nProblem 7: Most Expensive Product");
  
  const mostExpensiveProduct = sales
    .map(sale => ({ name: sale.product, price: sale.price }))
    .reduce((max, product) => product.price > max.price ? product : max);
  console.log(`Most Expensive Product: ${mostExpensiveProduct.name} at $${mostExpensiveProduct.price}`);
  
  // Problem 8: Use filter and reduce to calculate the average price of products in the "Sports" category
  console.log("\nProblem 8: Average Price of Sports Products");
  
  const sportsProducts = sales.filter(sale => sale.category === "Sports");
  const averageSportsPrice = sportsProducts.reduce((total, sale) => total + sale.price, 0) / sportsProducts.length;
  console.log(`Average Price of Sports Products: $${averageSportsPrice.toFixed(2)}`);
  
  // Problem 9: Use map and reduce to find the day with the highest sales
  console.log("\nProblem 9: Day with Highest Sales");
  
  const salesByDate = sales
    .map(sale => ({ date: sale.date, total: sale.price * sale.quantity }))
    .reduce((grouped, sale) => {
      if (!grouped[sale.date]) {
        grouped[sale.date] = 0;
      }
      grouped[sale.date] += sale.total;
      return grouped;
    }, {});
  
  const highestSalesDay = Object.entries(salesByDate)
    .reduce((max, [date, total]) => total > max.total ? { date, total } : max, { date: '', total: 0 });
  
  console.log(`Day with Highest Sales: ${highestSalesDay.date} with $${highestSalesDay.total.toFixed(2)}`);
  
  // Problem 10: Use filter, map, and reduce to get the total quantity sold for each product
  console.log("\nProblem 10: Total Quantity Sold per Product");
  
  const quantityByProduct = sales
    .reduce((grouped, sale) => {
      if (!grouped[sale.product]) {
        grouped[sale.product] = 0;
      }
      grouped[sale.product] += sale.quantity;
      return grouped;
    }, {});
  
  console.log(quantityByProduct);