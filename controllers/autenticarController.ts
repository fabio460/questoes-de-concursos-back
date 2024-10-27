import { Request, Response } from "express";
import { prisma } from "../prisma";
import jwt from 'jsonwebtoken'
export const logar = async(req:Request, res:Response)=>{
    const {email, senha} = req.body
    const usuario = await prisma.usuario.findFirst({
         where:{
            email,senha
         },
        
    })
    if (usuario) {
        const token = jwt.sign({id: usuario.id,usuario:usuario.email, nome: usuario.nome},"chave",{expiresIn:"1d"})
        res.json({nome:usuario.nome, email: usuario.email, token})
    } else {
        res.status(401).json("Email ou senha Inválidos")
    }
    //
}

export const autenticar = async(req:Request, res:Response)=>{
    const header:any = req.headers['x-access-token']
    const usuario = jwt.decode(header)

    try {
        if (jwt.verify(header,"chave")) {
            res.json(usuario)
        }
    } catch (error) {
        res.json("usuário não autenticado!")
    }
}
