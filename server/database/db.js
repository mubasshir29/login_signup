import mongoose from "mongoose";


const Connection = async (user,pass)=>{

    const URL = `mongodb://${user}:${pass}@ac-j6jeorx-shard-00-00.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-01.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-02.wexyfxp.mongodb.net:27017/?ssl=true&replicaSet=atlas-111qki-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Databse is connected")
    }
    catch(error){
        console.log("Unable to connect to database", error.message)
    }
}

export default Connection;