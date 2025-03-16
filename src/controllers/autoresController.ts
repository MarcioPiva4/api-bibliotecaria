import { Request, Response } from "express";
import { createAutores, deleteAutores, getAutores } from "../models/autores";

export class AutoresController{
    static async getAutor(req: Request, res: Response){
        try{
            const autores = await getAutores();
            res.status(200).json(autores);
        } catch(error){
            console.error(error);
            res.status(500)
        }
    }

    static async createAutor(req: Request, res: Response) {
        try{
            const createAutor = await createAutores( req.body );
            res.status(200).json({ status: 200, message: `O autor ${createAutor.nome} foi criado com sucesso!` });
        } catch(error){
            console.error(error);
            res.status(500);
        }
    }

    static async deleteAutor(req: Request, res: Response) {
        const id = req.params.id;
        try{
            const deleteAutor = await deleteAutores( Number(id) );
            res.status(200).json({ status: 200, message: `O autor(a) ${deleteAutor.nome} foi deletado com sucesso!` }); 
        } catch(error){
            console.error(error);
            res.status(500)
        }
    }
}