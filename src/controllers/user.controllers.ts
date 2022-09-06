import { Request, Response } from "express";
import { User } from "../models/user";

export default class UserController {

    static getUsers = async (req: Request, res: Response) => {
        const usuarios = await User.findAll();
        res.json(usuarios);
    }

    static getSolicitudes = async (req: Request, res: Response) => {
        const usuarios = await User.findAll({
            where: { aproved: false},
            order: [['id', 'DESC']]
        });
        res.json(usuarios);
    }

    static active = async (req: Request, res: Response) => {
        
       const { id } = req.body;
       const user = await User.update({ aproved: true }, {
            where: {
              id: id
            }
          });

          res.json(user);
    }

}
