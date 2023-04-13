import { Table, Column, Model} from "sequelize-typescript";
import { STRING,DATE,INTEGER} from "sequelize";

@Table({
  freezeTableName: true,
  schema: "cryptobase",
  tableName: "cyptomonedas_user",
})
export class CryptoUsersPOJO extends Model {
  
  @Column({
    primaryKey: true,
    type: STRING,
    field: "user_id",
  })
  user_id: string;

  @Column({
    type: INTEGER,
    field: "crypto_id",
  })
  crypto_id: number;
  @Column({
    type: INTEGER,
    field: "amount",
  })
  amount: number;
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
