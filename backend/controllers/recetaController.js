import recetaModel from "../models/recetaModel.js"
import fs from "fs"

//agregar una receta 
const addReceta = async (req, res) => {

    const receta = new recetaModel({
        name : req.body.name,
    ingredients : req.body.ingredients,
    steps :  req.body.steps,
    img : req.body.img
    })

    try{
        await receta.save()
        res.json({success : true, message : "Receta Agregada con exito"})
    }catch(error){
        console.log(error);
        res.status(500).json({success : false, message : "Error al agregar receta"})
    }
  
}

//listar todo

const listReceta = async (req, res) => {
    try {
        const recetas = await recetaModel.find({})
        res.json({success : true, data : recetas})
    } catch (error) {
        console.log(error)
        res.status(500).json({success : false, message : "Error al recuperar"})
        
    }
  
}

// remover receta

const removeReceta = async (req, res) => {
    try {
        recetaModel.findByIdAndDelete(req.body.id)
        res.json({sucess : true, message : "Receta Eliminada"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Error al eliminar"})
    }
}

// consultar por ingrediente

const recomendacionReceta = async (req, res) => {

    let { ingredientes } = req.body; 
    try{
        const recetas = await recetaModel.find({
            "ingredients.name": { $in: ingredientes }
        })
        res.json({success : true, data : recetas})
    }catch(error){
        console.log(error);
        res.status(500).json({success : false, message : "Error al consultar recetas por ingredientes"})

    }
}


export  { addReceta, listReceta, removeReceta ,  recomendacionReceta}
