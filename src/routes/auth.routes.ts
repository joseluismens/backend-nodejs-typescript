import { Router } from "express";
import  AuthController  from "../controllers/auth.controllers";
import  {checkJwt} from "../middlewares/checkJwt"
const router =  Router();

router.post('/login',AuthController.login);
router.post('/register',AuthController.register);
router.post('/forgot',AuthController.forgot);
router.post('/newPassword',[checkJwt],AuthController.newPassword);
//router.post("/change-password", [checkJwt], AuthController.changePassword);


export default router;