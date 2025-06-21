import mongoose from 'mongoose'

export const connectDb = async ()=>{
    await mongoose.connect('mongodb+srv://ksabhijith373:Abhijith2003@cluster0.xcnbblk.mongodb.net/FoodDeliveryApp').then(()=>console.log("Database Connected"));
    
}