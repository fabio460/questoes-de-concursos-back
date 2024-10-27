import { Request, Response } from "express";
import { prisma } from "../prisma";

export const listar = async(req:Request, res:Response)=>{
   const r = await prisma.questao.findMany({
    include:{
        usuario:{
            select:{
                email:true,
                id:true,
                nome:true
            }
        }
    }
   })
   res.json(r)
}

export const adicionarQuestoes = async(req:Request, res:Response)=>{
    const {idDoUsuario ,subItemDaMateria,materia, banca, alternativas,pergunta, resposta, titulo} = req.body
    try {
        const r = await prisma.questao.create({
            data:{
                idDoUsuario,                
                subItemDaMateria,
                materia,
                banca,
                alternativas,
                pergunta,
                resposta,
                titulo
            }
        })
        res.json("questão adicionada com sucesso!")
    } catch (error) {
        res.status(500).json("Falha ao adicionar questão, motivo"+error)
    }
}


export const atualizar = async(req:Request, res:Response)=>{
    const {
        id,
        banca,
        materia,
        pergunta,
        resposta,
        subItemDaMateria,
        titulo,
        alternativas
    } = req.body
    try {
        const r = await prisma.questao.update({
            data:{
                banca,
                materia,
                pergunta,
                resposta,
                subItemDaMateria,
                titulo,
                alternativas
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
        const r = await prisma.questao.delete({
            where:{id}
        })
        res.json("Usuário deletado com sucesso!")
    } catch (error) {
        res.status(500).json("Falha ao deletar usuário, motivo"+error)
    }
}