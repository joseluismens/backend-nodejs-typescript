import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';
import { Postulacion } from '../models/postulacion';
import { Role } from '../models/role';

export const conection = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    database:'CEC_DB',
    dialect: 'postgres',
    password: 'root',
    models:[User,Postulacion,Role],
    //Evita mostrar mensaje en consola
    logging:true
  });