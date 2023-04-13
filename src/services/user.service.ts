import { UsuarioPOJO } from './../data/models/user.model';
import { UserRespository } from './../data/respositories/user.respository';
import { UsersDTO} from "../types";

export class UserService{
    _userRepository: UserRespository;
    constructor(){
        this._userRepository=new UserRespository()
    }
   async getUser(username:string,password:string): Promise <UsersDTO | undefined>{
        const userPromise : UsersDTO | undefined = await this._userRepository.getUser(username,password).then (userPojo =>{
            if(!!userPojo){
                return this.convertirPOJOaDTO(userPojo)
            }else{
                return undefined
            }
        }).catch (error=>{
            console.error('Entro en el servicio' + error)
            throw error
        })
        return userPromise
    }
   async addUser(user: UsersDTO): Promise <string>{
        const userPromise : string = await this._userRepository.addUser(user).then(userId =>{
            if(!!userId){
                return userId
            }else{
                return ""
            }
        }).catch(error =>{
            console.error("Entro en el servicio" + error);
            throw error;
        })
         return userPromise;
    }
    async getUserById(user_id:string): Promise <UsersDTO | undefined>{
        const userPromise : UsersDTO | undefined = await this._userRepository.getUserById(user_id).then (userPojo =>{
            if(!!userPojo){
                return this.convertirPOJOaDTO(userPojo)
            }else{
                return undefined
            }
        }).catch (error=>{
            console.error('Entro en el servicio' + error)
            throw error
        })
        return userPromise
    }
    async updateUserBalance(newBalance:number,user_id:string):Promise<string>{
        const updatePromise = await this._userRepository.updateUserBalance(newBalance,user_id).then (result =>{
            if(result=='OK'){
                return 'Se ha actualizado tus fondos'
            }else{
                return 'Se ha detectado un problema'
            }
        }).catch(error =>{
            console.log(error)
            throw error
        })
        return updatePromise
    }
    convertirPOJOaDTO(user:UsuarioPOJO){
        let usuario:UsersDTO=<UsersDTO>user
        return usuario
    }
}