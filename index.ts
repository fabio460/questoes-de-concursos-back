import express, { Request, Response } from 'express'
import cors from "cors";
import { router } from './routes';
const app = express()
app.use(cors())
app.use(express.json())
router.map((e)=>{
    return app.use(e.endpoint, e.route)
})

app.listen(4000,()=>console.log('back rodando na porta 4000...'))