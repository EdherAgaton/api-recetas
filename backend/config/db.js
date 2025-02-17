import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://edheragaton:Eukrasia_001@cluster0.f3l0e.mongodb.net/test')
  .then(() =>
    
  console.log("Conectado a Mongo"))
}