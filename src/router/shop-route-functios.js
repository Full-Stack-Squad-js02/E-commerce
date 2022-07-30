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
        let cart = await cartTabel.findOne({
            where: {
                user_id: userId,
            }
        })
        if (cart) {
            if (!cart.product_id) {
                let newProduct = await cartTabel.update({
                    product_id,
                })
                console.log('UUUUUUUUUu', newProduct);
                res.status(201).json(newProduct);
            } else {
                let newProduct = await cartTabel.create({
                    product_id,
                    user_id: userId,
                })
                console.log(newProduct);
                res.status(201).json(newProduct);
            }
        }
    } else {
        console.log('Product is not avaliable');
        res.status(403).send('Product is not avaliable');
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

async function addProductToWishList(req, res) {
    const product_id = req.params.id;
    const userId = req.user.id;
    let product = await productTabel.findOne({
        where: {
            id: product_id
        }
    });

    if (product) {
        let wishlist = await wishlistTabel.findOne({
            where: {
                user_id: userId,
            }
        })
        if (wishlist) {
            if (!wishlist.product_id) {
                let newProduct = await wishlistTabel.update({
                    product_id,
                })
                console.log('UUUUUUUUUu', newProduct);
                res.status(201).json(newProduct);
            } else {
                let newProduct = await wishlistTabel.create({
                    product_id,
                    user_id: userId,
                })
                console.log(newProduct);
                res.status(201).json(newProduct);
            }
        }
    } else {
        console.log('Product is not avaliable');
        res.status(403).send('Product is not avaliable');
    }

}

async function makeOrder(req, res) {
    const userId = req.user.id;
    const adress= req.query.id;
    let allProductsInCart = await cartTabel.findAll({ where: { user_id: userId } });
    if (allProductsInCart) {
        // let order = 
    }
}

module.exports = {
    addProductToCart,
    addProductToWishList,
    makeOrder,
};
