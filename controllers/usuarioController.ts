import { Request, Response } from "express";
import { prisma } from "../prisma";

export const listar = async(req:Request, res:Response)=>{
    try {
       const r = await prisma.usuario.findMany()
       res.json(r)
    
   } catch (error) {
     res.json(error)
   }
}

export const criar = async(req:Request, res:Response)=>{
    const {nome, email, senha} = req.body
    console.log({nome, email, senha})
    try {
        const r = await prisma.usuario.create({
            data:{
               nome, email, senha
            }
        })
        res.json("Usuário criado com sucesso!")
    } catch (error) {
        res.status(500).json("Falha ao criar usuário, motivo"+error)
    }
}

export const atualizar = async(req:Request, res:Response)=>{
    const {id ,nome, email, senha} = req.body
    try {
        const r = await prisma.usuario.update({
            data:{
               nome, email, senha
            },
            where:{
              id
            }
        })
        res.json("Usuário atualizado com sucesso!")
    } catch (error) {
        res.status(500).json("Falha ao atualizar usuário, motivo"+error)
    }
}

export const deletar = async(req:Request, res:Response)=>{
    const {id} = req.body
    try {
        const r = await prisma.usuario.delete({
            where:{id}
        })
        res.json("Usuário deletado com sucesso!")
    } catch (error) {
        res.status(500).json("Falha ao deletar usuário, motivo"+error)
    }
}