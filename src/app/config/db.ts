import 'dotenv/config'
import mongoose from 'mongoose'

let cached = global.mongoose || {con: null , promise : null };

export default async  function connectedDB() {

    if(cached.conn)  return cached.conn; 
    if (!cached.promise) {
        cached.promise =  (await mongoose.connect(process.env.MONGODB_URL)).
        then((mongoose) => mongoose)
    }


    try {
          cached.conn = await cached.promise;
    }  catch (error) {
        console.error('error connnecting to  mongodb: ', error)

    }

    return cached.conn

}