import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/usuarioController";

const usuarioRouter = Router()
usuarioRouter.get("/listar", listar)
usuarioRouter.post("/criar", criar)
usuarioRouter.get("/atualizar", atualizar)
usuarioRouter.get("/deletar", deletar)

export default usuarioRouter