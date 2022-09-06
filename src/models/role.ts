import {Table,Model,Column,DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { User } from './user';


@Table({
    timestamps:false,
    tableName: "roles"
})

export class Role extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull:true,
        defaultValue: 'INVESTIGADOR'
    })
    name!:string;

    @ForeignKey(() => User)
    @Column
    userId!: number


    @BelongsTo(()=>User)
    user!: User

    


}