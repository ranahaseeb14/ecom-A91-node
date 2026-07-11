const productModel = require("../models/Product")

const createProduct = async (req, res) => {
    const { title, desc, price, review } = req.body
    const createdProduct = await productModel.create({ title: req.body.title, desc: req.body.desc, price: req.body.price, review: req.body.review })
    res.send(createdProduct)
}
const getProducts = async (req, res) => {
    const data = await productModel.find({})
    res.send(data)
}
const getSingleProduct = async (req, res) => {
    const singleProduct = await productModel.findById(req.params.id)
    res.send(singleProduct)
}

const deleteProduct = async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id)
    res.send("Product has been deleted")
}

const editProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const productUpdated = await productModel.findByIdAndUpdate(id, body, { new: true })
    res.send("Product Updated Successfully")
}

module.exports = { createProduct, getProducts, deleteProduct, getSingleProduct, editProduct }