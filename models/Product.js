const mongoose = require(`mongoose`)


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, "Title should be atleast of 3 characters"]
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    review: {
        type: String,
        required: true,
    },

}, { timestamps: true })


const productModel = mongoose.model('product', productSchema)


module.exports = productModel