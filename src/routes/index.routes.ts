import { Router, Request, Response } from "express";

import auth from './auth.routes'
import user from './user.routes'

import postulacion from './postulacion.routes'

const routes = Router();


routes.use("/api",auth);
routes.use("/api",user);
routes.use("/api",postulacion);

export default routes;