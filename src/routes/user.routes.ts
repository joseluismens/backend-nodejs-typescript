import { Router } from "express";
import  UserController  from "../controllers/user.controllers";

const router = Router();

router.get('/user/users', UserController.getUsers);
router.get('/user/solicitudes', UserController.getSolicitudes);
router.post('/user/active', UserController.active);

export default router;