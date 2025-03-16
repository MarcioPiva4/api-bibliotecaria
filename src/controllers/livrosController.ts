import { Request, Response } from "express";
import { createLivros, deleteLivros, getLivros } from "../models/livros";

export class LivrosController {
    static async getLivro(req: Request, res: Response){
        try{
            const livros = await getLivros();
            res.status(200).json(livros);
        } catch(error){
            console.error(error);
            res.status(500);
        }
    }

    static async createLivro(req: Request, res: Response) {
        try{
            const createLivro = await createLivros( req.body );
            res.status(200).json({ status: 200, message: `O livro ${createLivro.nome} foi criado com sucesso!` });
        } catch(error){
            console.error(error);
            res.status(500);
        }
    }

    static async deleteLivros(req: Request, res: Response) {
        const id = req.params.id;
        try{
            const deleteLivro = await deleteLivros( Number(id) );
            res.status(200).json({ status: 200, message: `O livro ${deleteLivro.nome} foi deletado com sucesso!` }); 
        } catch(error){
            console.error(error);
            res.status(500);
        }
    }
}