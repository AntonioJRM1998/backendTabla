import { UsuarioPOJO } from "../models/user.model";
import { connect } from "../config/db.config";
import { UsersDTO } from "../../types";
import logger from '../../utils/logger'
export class UserRespository {
  _database: any = {};
  _userResporitory: any;

  constructor() {
    this._database = connect();
    this._userResporitory = this._database.sequelize.getRepository(UsuarioPOJO);
  }
  async getUser(tbfUsername: string,tbfUserpassword:string): Promise<UsuarioPOJO | undefined> {
    try {
      console.log(tbfUsername);
      return await this._userResporitory.findOne({
        where: { email: tbfUsername, 
              password: tbfUserpassword },
      });
    } catch (error) {
      console.error("Error repositorio" + error);
      logger.error(error)
      return undefined;
    }
  }
  async addUser(newUser:UsersDTO): Promise <string>{
    try {
      await this._userResporitory.create(newUser)
      return newUser.user_id
    } catch (error) {
      console.error(error)
      logger.error(error)
      return 'No se ha podido crear el usuario'
    }
  }
  async getUserById(userid:string): Promise<UsuarioPOJO | undefined> {
    try {
      return await this._userResporitory.findOne({
        where: { user_id: userid},
      });
    } catch (error) {
      console.error("Error repositorio" + error);
      logger.error(error)
      return undefined;
    }
  }
  async updateUserBalance(newBalance:number,user_id:string) : Promise <string>{
    try {
       await this._userResporitory.update({deposit:newBalance},{where:{user_id:user_id}})
       return 'OK'
    } catch (error) {
      console.log(error)
      logger.error(error)
      return 'KO'
    }
  }
}
