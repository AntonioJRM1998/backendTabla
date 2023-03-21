import { Table, Column, Model } from "sequelize-typescript";
import { STRING,DATE } from "sequelize";

@Table({
  freezeTableName: true,
  schema: "ejercicio_Angular",
  tableName: "Usuarios",
})
export class UsuarioPOJO extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "user_id",
  })
  user_id: string;

  @Column({
    type: STRING,
    field: "username",
  })
  username: string;
  @Column({
    type: STRING,
    field: "password",
  })
  password: string;

  @Column({
    type: DATE,
    field: "createdAt",
  })
  createdAt: Date;

  @Column({
    type: DATE,
    field: "updatedAt",
  })
  updatedAt: Date;
}
