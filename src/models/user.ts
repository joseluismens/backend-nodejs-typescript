import {Table,Model,Column,DataType, HasMany} from 'sequelize-typescript';
import * as bcrypt from "bcrypt";
import { Postulacion } from './postulacion';
import { Role } from './role';


@Table({
    timestamps:false,
    tableName: "users"
})

export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    names!:string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull:true,
        defaultValue: false
    })
    aproved!:boolean;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    surnames!:string;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    document_type!:string;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    document!:string;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    email!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
        unique:true,
        set(value: any) {
            const hash = bcrypt.hashSync(value, 8);
            this.setDataValue('password', hash);
        }
    })
    password!:string;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    phone!:string;

    @HasMany(() => Postulacion)
    postulaciones?: Postulacion

    @HasMany(() => Role)
    roles?: Role


}