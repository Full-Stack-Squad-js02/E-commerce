'use strict';

const { product } = require('../models/index-model');

// Search for all products for specific user 
async function searchForUser(req, res) {
    const id = req.query.id;
    let allRecords = await product.searchByUser(id);
    res.status(200).json(allRecords);
}

// search for products with specific name or title ( Using "title" in product Table )
async function searchForTitleName(req, res) {
    const name = req.query.name;
    let allRecords = await product.searchByName(name);
    res.status(200).json(allRecords);
}

// search for product with chosen Price
async function searchForPriceOfProduct(req, res) {
    const price = req.query.price;
    let allRecords = await product.searchByPrice(price);
    res.status(200).json(allRecords);
}

// search for product with chosen Color
async function searchForProductColor(req, res) {
    const color = req.query.color;
    let allRecords = await product.searchByColor(color);
    res.status(200).json(allRecords);
}

/* don't forget to add Two functions, 
one : search for some product for specific Category
Two : search for some product for specific Category and specific Price
*/

// async function searchCategory(req, res) {
//   const category_id = req.params.category_id;
//   let allRecords = await product.searchByCategory(category_id);
//   res.status(200).json(allRecords);
// }

// async function searchCategoryPrice(req, res) {
//     const category_id = req.params.category_id;
//     const price = req.params.category_id;
//     let allRecords = await product.searchByCategoryPrice(category_id,price);
//     res.status(200).json(allRecords);
// }

module.exports = {
    // Search
    searchForUser,
    searchForTitleName,
    searchForPriceOfProduct,
    searchForProductColor,
}