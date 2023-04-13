
import { CyptoUserDTO } from "../types";
import { CryptoUsersRespository } from '../data/respositories/crypto-user.repository';
import { CryptoUsersPOJO } from '../data/models/crypto-users.model';



export class CryptoUsersService{
    _cryptoUsersRespository:CryptoUsersRespository

    constructor(){
        this._cryptoUsersRespository = new CryptoUsersRespository()
    }

    async updateCryptoUserTable(cryptoUser:CyptoUserDTO):Promise <string>{
        var cryptoUserePojo : CryptoUsersPOJO = this.convertirDTOtoPJO(cryptoUser)
        const promiseUpdate = await this._cryptoUsersRespository.updateCryptoUserTable(cryptoUserePojo).then(result =>{
            if(!!result){
                return result
            }else{
                return 'La query ha fallado'
            }
        })
        return promiseUpdate
    }
    async getCoinByCryptoId(crypto_id:number,user_id:string):Promise <CyptoUserDTO | undefined>{
        const promiseCoin = await this._cryptoUsersRespository.getCoinByCryptoId(crypto_id,user_id).then (result =>{
            if(!!result){
                return this.convertirPOJOaDTO(result)
            }else{
                return undefined
            }
        })
        return promiseCoin
    }

    convertirPOJOaDTO(user:CryptoUsersPOJO){
        let usuario:CyptoUserDTO=<CyptoUserDTO>user
        return usuario
    }
    convertirDTOtoPJO(user:CyptoUserDTO){
        let usuario:CryptoUsersPOJO =<CryptoUsersPOJO><unknown>user
        return usuario
    }    
}    