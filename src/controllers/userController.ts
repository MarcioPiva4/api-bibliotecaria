import { Request, Response } from "express";
import { createUsers, getUsers } from "../models/user";

export class UserController {

    static async getUser (req: Request, res: Response){
        try{
            const users = await getUsers();
            res.status(200).json(users);
        } catch (error){
            res.status(500);
        }
    }

    static async createUser (req: Request , res: Response) {
        try{
            const create = await createUsers( req.body );
            res.status(200).json({ status: 200, message: `O usuario ${create.name} foi criado com sucesso!` });
        } catch (error) {
            res.status(500);
        }
    }
}