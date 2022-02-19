import dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from 'mongodb'

const{ MONGODB_URI,MONGODB_DB } = process.env

if (!MONGODB_URI){
    throw new Error('please define MONGODBURI variable')
}

if (!MONGODB_DB){
    throw new Error('please define MONGODBDB variable')
}

let cached = global.MongoClient
if(!cached){
    cached = global.mongo = {conn:null, promise: null}
}

export async function connectToDatabase(){
    if (cached.conn) {
        return cached.conn
    }
<<<<<<< HEAD

=======
>>>>>>> 7c698390ce8a9bedde624abe4da3fdd39bc2bc5e

if (!cached.promise){
    const opts = {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    }
    cached.promise = MongoClient.connect(MONGODB_URI,opts).then((client) =>{
    return {
        client,
        db: client.db(MONGODB_DB),
    }
 })
}
cached.conn = await cached.promise
return cached.conn
}
