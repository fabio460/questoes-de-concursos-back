import { Router } from "express";
import { autenticar, logar } from "../controllers/autenticarController";

const autenticaRouter = Router()

autenticaRouter.post("/logar", logar)
autenticaRouter.get("/verificarLogado",autenticar)

export default autenticaRouter