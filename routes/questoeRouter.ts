import { Router } from "express";
import { adicionarQuestoes, listar } from "../controllers/questoesController";

const questoesRouter = Router()
questoesRouter.get("/listar", listar)
questoesRouter.post('/adicionarquestoes', adicionarQuestoes)
export default questoesRouter