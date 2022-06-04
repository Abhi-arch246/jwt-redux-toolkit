const mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://abhiuser7:abhiuser7@cluster0.j00faur.mongodb.net/mern-jwt-auth?retryWrites=true&w=majority"
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`Mongo server connected`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

module.exports = connectDb