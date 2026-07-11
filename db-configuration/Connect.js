const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('DB is Connected Successfully')
    }).catch(err=>{
        console.log('ERROR IN DB CONNECTION', err)
    })
}
module.exports= connectDB