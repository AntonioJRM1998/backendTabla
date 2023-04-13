import { Table, Column, Model} from "sequelize-typescript";
import { STRING,DATE,INTEGER, DOUBLE} from "sequelize";

@Table({
  freezeTableName: true,
  schema: "cryptobase",
  tableName: "cryptomonedas",
})
export class CryptoPOJO extends Model {

  @Column({
    primaryKey: true,
    type: INTEGER,
    field: "crypto_id",
  })
  crypto_id: number;

  @Column({
    type: STRING,
    field: "crypto_name",
  })
  crypto_name: string;
  @Column({
    type: STRING,
    field: "asset",
  })
  asset: string;
  @Column({
    type: STRING,
    field: "icon",
  })
  icon: string;
  @Column({
    type: INTEGER,
    field: "stock",
  })
  stock: number;

  @Column({
    type: DOUBLE,
    field: "value",
  })
  value:number;
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
