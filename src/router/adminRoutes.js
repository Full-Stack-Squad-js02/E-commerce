'use strict';

require('dotenv').config();
const socketPort = process.env.SOCKET_PORT;
const io = require('socket.io-client');
let host = `http://localhost:${socketPort}/`;

const serverConnection = io.connect(host);

const {
    users,
    productTabel,
    catagory,
    orderTabel,
    catagoryTabel,
    typeTabel,
} = require("../models/index-model");



//GET All users
async function getUsersAdmin(req, res, next) {
    if (req.user.role == "admin") {
        try {
            const userRecords = await users.findAll({});
            const list = userRecords.map(user => user);
            res.status(200).json(list);
        } catch (e) {
            next(e.message);
        }
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }
}



//DELETE one user
async function deleteUser(req, res) {
    const id = req.params.id;
    if (req.user.role == "admin") {
        let deletedRecord = await users.destroy({
            where: {
                id
            }
        });
        if (deletedRecord == 1) {
            res.status(204).send(`user with id ${id} is deleted Successfully`);
        } else {
            res.status(403).send("deleted process is Failed");
        }
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");

    }
}

//Get All Products
async function getProductAdmin(req, res, next) {
    if (req.user.role == "admin") {
        try {
            const productRecords = await productTabel.findAll({});
            const list = productRecords.map(product => product);
            res.status(200).json(list);
        } catch (e) {
            next(e.message);
        }
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }
}


//DELETE One Product
async function deleteOneProductByAdmin(req, res) {
    const id = req.params.id;
    if (req.user.role == "admin") {
        let deletedRecord = await productTabel.destroy({
            where: {
                id
            }
        });
        if (deletedRecord == 1) {
            res.status(204).send(`product with id ${id} is deleted Successfully`);
        } else {
            res.status(403).send("deleted process is falied");
        }
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }
}

// Add New Catagory

async function createCatagory(req, res) {
    if (req.user.role == "admin") {
        let obj = req.body;
        let newRecord = await catagory.create(obj);
        res.status(201).json(newRecord);
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }

}


// add New Type Under Catagory 
async function createType(req, res) {
    if (req.user.role == "admin") {
        let catagory = req.query.catagory;
        let typeName = req.body;
        let foundCatagory = await catagoryTabel.findOne({
            where: {
                name: catagory
            }
        })
        if (foundCatagory) {
            let newType = await typeTabel.create({
                name:typeName,
                catagory_id:foundCatagory.id,
            })
            // console.log("2222222222222222",foundCatagory)
            res.status(201).json(newType);
        } else {
            let newCatagory = await catagoryTabel.create({
                name: catagory
            })
            let newType = await typeTabel.create({
                name:typeName,
                catagory_id:newCatagory.id,
            })
            // console.log("1111111111111111",newCatagory);
            res.status(201).json(newType);
        }
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }

}

/*..........Shipping.......*/
async function getAllConfirmedOrderByAdmin(req, res) {
    let user = req.user;
    if (user.role === 'admin') {
        let allOrders = await orderTabel.findAll({
            where: {
                status: 'confirmed',
                isRecived: false,
            }
        });
        res.status(200).json(allOrders);
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }
}

async function confirmOrdersByAdmin(req, res) {
    let user = req.user;
    if (user.role === 'admin') {
        let allOrders = await orderTabel.findAll({
            where: {
                status: 'confirmed',
                isRecived: false,
            }
        });
        if (allOrders) {
            let updateState = await orderTabel.update({
                status: 'delivered',
            }, {
                where: {
                    status: 'confirmed',
                    isRecived: false,
                }
            })
            serverConnection.emit('delivered-order', allOrders);
            console.log('Updated Successfully');
            res.status(201).json(updateState);
        }
    } else {
        res.status(403).json("*** Access Denied *** JUST Admin Can reach to this page");
    }
}



module.exports = {
    deleteUser,
    getUsersAdmin,
    getProductAdmin,
    deleteOneProductByAdmin,
    createCatagory,
    createType,
    getAllConfirmedOrderByAdmin,
    confirmOrdersByAdmin,
};