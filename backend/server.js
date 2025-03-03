import express from "express"
import { connectDB } from './config/db.js'
import recetaRouter from "./routes/recetaRoute.js"


const app = express()
const port = 4000

app.use(express.json()) 

connectDB()


//AQUI VAN LOS ENDPOINTS

app.use("/api/receta", recetaRouter)

app.get("/", (req, res) => {
    res.send("API ESTA PIOLA")
  
})
///

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost${port}`);
})