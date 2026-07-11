const express = require(`express`)

const router = express.Router()

const { createProduct, getProducts, getSingleProduct, deleteProduct, editProduct } = require('../controllers/product')

router.post('/create', createProduct)

router.get('/products', getProducts)

router.get('/products/:id', getSingleProduct)

router.delete('/products/:id', deleteProduct)

router.patch('/products/:id', editProduct)

module.exports = router