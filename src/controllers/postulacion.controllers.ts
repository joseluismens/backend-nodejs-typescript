import { Request, Response } from "express";

//import multer from "multer";

//const upload = multer({dest : 'uploads'})

//import { Postulacion } from "../models/postulacion";

export default class PostulacionController {

    static save = async (req: Request, res: Response) => {
        
        const files = req.files;

        console.log(files)
        
        res.json(files);
    }

}