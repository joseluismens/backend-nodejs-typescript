import { Router } from "express";


import PostulacionController from "../controllers/postulacion.controllers";

const multer  = require('multer')
const router = Router();


//const upload = multer({ dest: 'uploads/' })

const fileStorageEngine = multer.diskStorage({
    destination : (req: any, file: any, cb: any) => {
        cb(null, 'uploads/')
    },
    filename: (req: any, file: any, cb: any) => {
        cb(null, Date.now() + '--' +file.originalname )
    }
})

const upload = multer({ storage: fileStorageEngine })


router.post('/postulacion/save', upload.array('documents', 4) ,PostulacionController.save);

export default router;