'use strict';

const {
    users,
    productTabel,
    catagory,
    type,
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
        res.send("you are not admin");
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
            res.status(403).send("deleted process is falied");
        }
    } else {
        res.send("you are not admin");

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
        res.send("you are not admin");
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
        res.send("you are not admin");
    }
}

// Add New Catagory

async function createCatagory(req, res) {
    if (req.user.role == "admin") {
        let obj = req.body;
        let newRecord = await catagory.create(obj);
        res.status(201).json(newRecord);
    } else {
        res.send("you are not admin");
    }

}


// add New Type Under Catagory 

async function createType(req, res) {
    if (req.user.role == "admin") {
        let catagory = req.query.catagory
        let obj = req.body;
        let foundCatagory = await catagoryTabel.findOne({
            where: {
                name: catagory
            }
        })
        if (foundCatagory) {
            let newType = await typeTabel.create(obj)
            newType.catagory_id = foundCatagory.id
            foundCatagory.type_id = newType.id
            // console.log("2222222222222222",foundCatagory)
            res.status(201).json(newType);
        } else {
            let newCatagory = await catagoryTabel.create({
                name: catagory
            })
            let newType = await typeTabel.create(obj)
            newType.catagory_id = newCatagory.id
            newCatagory.type_id = newType.id
            // console.log("1111111111111111",newCatagory);

            res.status(201).json(newType);
        }
    } else {
        res.send("you are not admin");
    }

}



module.exports = {
    deleteUser,
    getUsersAdmin,
    getProductAdmin,
    deleteOneProductByAdmin,
    createCatagory,
    createType


};