// Write your code here

// Task 2: Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3: Access Product Information
// Logs the details (name) of the first product in the array
function logFirstProduct() {
  console.log(products[0]);
}

// Task 4: Add a Product
// Adds a new product to the end of the array
function addProduct(productName) {
  products.push(productName);
}

// Task 5: Update Product Information
// Changes the name of a product at the given index
function updateProductName(index, newName) {
  products[index] = newName;
}

// Task 6: Remove a Product
// Removes the last product from the array
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
