import { UsuarioPOJO } from "../models/user.model";
import { connect } from "../config/db.config";
import { UsersDTO } from "../../types";

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
        where: { username: tbfUsername, 
              password: tbfUserpassword },
      });
    } catch (error) {
      console.error("Error repositorio" + error);
      return undefined;
    }
  }
  async addUser(newUser:UsersDTO): Promise <string>{
    try {
      await this._userResporitory.create(newUser)
      return newUser.user_id
    } catch (error) {
      console.error(error)
    }
    return ""
  }
}
