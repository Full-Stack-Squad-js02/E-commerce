'use strict';
const {
    productTabel,
    orderTabel,
    cartTabel,
    ratingTabel,
    catagoryTabel,
    typeTabel,
    massageTabel,
    wishlistTabel,
    shippingTabel,
} = require('../models/index-model');

async function addProductToCart(req, res) {
    const product_id = req.params.id;
    const userId = req.user.id;
    // let cart = await cartTabel.findOne({
    //     where: {
    //         user_id: userId
    //     }
    // });

    let product = await productTabel.findOne({
        where: {
            id: product_id
        }
    });

    if (product) {
        let newProduct = await cartTabel.create({
            product_id,
            user_id:userId,
        })
        console.log(newProduct);
        res.status(201).json(newProduct);
    }

    // if (product) {
    //     cart.product_id = id;
    //     let totalprice = cart.totalprice + product.price;
    //     let totalquantity = cart.quantity + 1;
    //     // console.log(x, y);
    //     let updated = await cartTabel.update({
    //         // product_id: id,
    //         totalprice: cart.totalprice + totalprice,
    //         quantity: cart.quantity + totalquantity
    //     }, {
    //         where: {
    //             user_id: userId
    //         }
    //     });
        
    //     let wholeCart = await cartTabel.findOne({
    //     where: {
    //         user_id: userId
    //     }
    // });

    //     res.status(200).json(wholeCart);
    // }
}

module.exports = addProductToCart;



// cart.totalprice = cart.totalprice + product.price;

//    let addedItem = await cartTabel.create({
//             product_id: id,
//             // totalprice: cart.totalprice + product.price,
//             // quantity: cart.quantity + 1
//         });
// addedItem.totalprice = cart.totalprice + product.price,
// addedItem.quantity=cart.quantity+1;
// console.log('111111111111', cart.totalprice);
// console.log('222222222222', product.price);
// console.log('333333333333', cart.quantity);
// console.log('4444444444', product.quantity);