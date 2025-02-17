import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
    name : { type : String, required : true },
    ingredients : { type : Array, required : true},
    steps : { type : Array, required : true }, 
    img : { type : String, require : false}
})

const recetaModel = mongoose.models.receta || mongoose.model("receta", recetaSchema)

export default recetaModel