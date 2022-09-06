import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";
import bcrypt from 'bcrypt';

import { transporter } from "../config/mailer";

import config from "../config/config";
import { User } from "../models/user";
import checkIfUnencryptedPasswordIsValid from "../config/utils";

export default class AuthController {

    static login = async (req: Request, res: Response) => {

        const { email, password } = req.body;
        if (!(email && password)) return res.status(500).send({message:'error'});

        User.findOne({ where:{email:email} })
            .then((result:User | null)=>{
                if (!result) {
                    return res.status(500).send({ message: "Este usuario no esta registrado en nuestro sistema" });
                }

                
        
                if(!checkIfUnencryptedPasswordIsValid(password,result.password)) return  res.status(500).send({ message: "contraseña incorrecta" });

                if (result.aproved == false) 
                    return res.status(419).send({ message: "Su acceso aún no se ha gestionado"});
               
                const token = jwt.sign(
                    {
                        id: result.id,
                        nombres:result.names,
                        apellidos:result.surnames,
                        email:result.email
                    },
                    config.jwtSecret,
                    { expiresIn: '1h' }
                );
                res.header('auth-token', token).json({
                    id:result.id,
                    names: result.names,
                    surnames: result.surnames,
                    email:result.email,
                    token:token});
            })
            
    }

    static register = (req: Request, res: Response) => {
        const { names, surnames, document_type, document, email, phone, password } = req.body;

        User.findOne({ where: { email: email } })
            .then((result: any) => {
                if (result) {
                    return res.status(500).json({message:"el correo ya ha sido registrado"})
                } else {
                    User.create({
                        ...req.body
                    }).then((result: object) => res.status(200).json(result)).catch((err: object) => console.error(err));
                }

            }).catch((err: object) => console.error(err));

    }

    static forgot = async (req: Request, res: Response) => {
        const { email } = req.body;

       const user = await User.findOne({ where:{email:email} });

       if (!user) return res.status(500)
       .send({ message: "Este e-mail no esta registrado en nuestro sistema" });

        const token = jwt.sign(
            {
                id: user.id,
                names:user.names,
                surnames:user.surnames,
                email:user.email
            },
            config.jwtSecret,
            { expiresIn: '1h' }
        );

       const bodyMail = `<b>Olvidaste tu contraseña? <a href=http://localhost:4200/auth/recovery/${token}>Click aquí</a> para asignar una nueva </b> `;
            
             await transporter.sendMail({
                from: '"Cambio de contraseña Coimnté ético citentífico 👻" <noreply@gmail.com>', // sender address
                to: "eduardo.a.arce@icloud.com", // list of receivers
                subject: "Cambiar contaseña cec 🔑", // Subject line
                text: "Hello world?", // plain text body
                html: bodyMail, // html body
              }).then(()=>{
                return res.status(200).json({message : "Se envió un correo de recuperación al e-mail indicado" });
              }).catch((error)=>{console.log('ERROR mailer', error)});

       //return res.status(200).json({user });

    }


    static newPassword = async (req: Request, res: Response) => {
        const id = res.locals.jwtPayload.id;
        const {  password } = req.body;

        const user = await User.findByPk(id);

        User.update({
            password:password
        },
        {where:{
            id:id
        }}).then((result:any)=> res.status(200).json({message:"Su contraseña se ha actualizado"}))
        .catch((error:object)=>console.error(error));

        //res.status(200).json(user);
    }


    static changePassword = (req: Request, res: Response) => {

        console.log(req.header('auth-token'));
        
        const id = res.locals.jwtPayload.id;
        console.log(id);
        
        const { oldPassword, newPassword } = req.body;

        if (!(oldPassword && newPassword)) return res.status(400).send();
        
         User.findByPk(id).then((result:User | null)=>{
            if (!result) return res.status(500).json({message:"usuario no encontrado"});

            if(!bcrypt.compareSync(oldPassword, result.password)) return  res.status(500).send({ message: "contraseña incorrecta" });
            User.update({
                password:newPassword
            },
            {where:{
                id:id
            }}).then((result:any)=> res.status(200).json({message:"contraseña actutalizada"}))
            .catch((error:object)=>console.error(error));
            
         }).catch((error:object)=>console.error(error));
     
    };

}