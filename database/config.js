const mongoose = require('mongoose');

const dbConnetion = async()=>{
    //el async() hace que devuleva una promesa
    try {
        await mongoose.connect(process.env.DB_CNN);
            console.log("Base de datos ONLINE!")                                                
    } catch (error) {
        console.log("error");
        throw new Error("Error al iniciar la base de datos");
    }
}

module.exports = {
    dbConnetion
}