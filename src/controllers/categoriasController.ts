import { Request, Response } from "express";
import { createCategorias, deleteCategorias, getCategorias } from "../models/categoria";

export class CategoriasController {
    static async getCategoria(req: Request, res: Response){
        try{
            const categorias = await getCategorias();
            res.status(200).json(categorias);
        } catch(error){
            console.error(error);
            res.status(500);
        }
    }

    static async createCategoria(req: Request, res: Response) {
        try{
            const createCategoria = await createCategorias( req.body );
            res.status(200).json({ status: 200, message: `A categoria ${createCategoria.nome} foi criado com sucesso!` });
        } catch (error){
            console.error(error);
            res.status(500);
        }
    }

    static async deleteCategoria(req: Request, res: Response) {
        const id = req.params.id;
        try{
            const deleteCategoria = await deleteCategorias( Number(id) );
            res.status(200).json({ status: 200, message: `A categoria ${deleteCategoria.nome} foi deletada com sucesso!` }); 
        } catch(error){
            console.error(error);
            res.status(500);
        }
    }
}