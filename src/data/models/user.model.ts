import { Table, Column, Model } from "sequelize-typescript";
import { STRING,DATE,INTEGER } from "sequelize";

@Table({
  freezeTableName: true,
  schema: "cryptobase",
  tableName: "usuarios",
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
    type: STRING,
    field: "email",
  })
  email: string;
  @Column({
    type: INTEGER,
    field: "deposit",
  })
  deposit: number;
  @Column({
    type: STRING,
    field: "birthdate",
  })
  birthdate: string;
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
