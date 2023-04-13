import { Sequelize } from 'sequelize-typescript';
import { UsuarioPOJO } from '../models/user.model';
import { CryptoPOJO } from '../models/crypto.model';
import { CryptoUsersPOJO } from '../models/crypto-users.model';
export const connect = () => {
  const DB_HOSTNAME = "localhost";
  const DB_PORT = 5432;
  const DB_NAME = "postgres";
  const DB_USERNAME = "postgres";
  const DB_PASSWORD = "armagedon1";
  const DB_SCHEMA = "cryptobase";
  const DB_DIALECT: any = "postgres";

  const dbConfig = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    port: DB_PORT,
    dialect: DB_DIALECT,
    schema: DB_SCHEMA,
    repositoryMode: true, //con esto esta en modo repositorio
    pool: {
      max: 10, //numero maxima de transacciones
      min: 0,
      acquire: 20000, //tiempo que espera la transaccion (si tenemos 11 esa 1 de mas espera este tiempo a que alguna de las 10 acabe)
      idle: 5000,
    },
  });
  
  dbConfig.addModels([UsuarioPOJO,CryptoPOJO,CryptoUsersPOJO]);
  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = dbConfig;
  return db
};
