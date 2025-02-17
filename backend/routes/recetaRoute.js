import express from 'express'
import { addReceta, listReceta, removeReceta,  recomendacionReceta  } from "../controllers/recetaController.js"


const recetaRouter = express.Router()

recetaRouter.post("/add", addReceta)

recetaRouter.get("/list", listReceta)

recetaRouter.post("/remove", removeReceta)

recetaRouter.post("/recom", recomendacionReceta )

export default recetaRouter