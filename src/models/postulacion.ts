import {Table,Model,Column,DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { User } from './user';

@Table({
    timestamps:false,
    tableName: "postulacion"
})

export class Postulacion extends Model {

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
    title!:string;

    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    source!:string;

    @ForeignKey(() => User)
    @Column
    userId!: number


    @BelongsTo(()=>User)
    user!: User

}


