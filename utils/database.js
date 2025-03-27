// oJ2QPjyTm5LJ5s4f
import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptverse"
        })
        
        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}