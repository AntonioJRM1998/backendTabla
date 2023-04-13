import { CryptoUsersPOJO } from './../models/crypto-users.model';
import { connect } from "../config/db.config"



export class CryptoUsersRespository{
    _database:any = {}
    _cryptUsersorepository:any

    constructor(){
        this._database = connect()
        this._cryptUsersorepository = this._database.sequelize.getRepository(CryptoUsersPOJO)
    }
    async getMyCoins(user_id:string):Promise <CryptoUsersPOJO[]>{
        try {
            return await this._cryptUsersorepository.findAll({
                where:{ user_id:user_id }
            })
        } catch (error) {
            console.error(error)
            return []
        }
    }
    async getCoinByCryptoId(crypto_id:number,user_id:string):Promise <CryptoUsersPOJO |undefined>{
        try {
            return await this._cryptUsersorepository.findOne({
                where:{ crypto_id:crypto_id,
                user_id:user_id }
            })   
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async updateCryptoUserTable(cryptoUser:CryptoUsersPOJO):Promise <string>{
        try {
            const data = await this._cryptUsersorepository.findOne({ where:{
                user_id : cryptoUser.user_id,
                crypto_id:cryptoUser.crypto_id
            }})
            if(!!data){
                await this._cryptUsersorepository.update({amount:cryptoUser.amount},{where:{
                    user_id : cryptoUser.user_id,
                    crypto_id:cryptoUser.crypto_id
                }})
                return 'Update Completed'
            }else{
                await this._cryptUsersorepository.create(cryptoUser)
                return 'Registro creado'
            }
        } catch (error) {
            console.log(error)
            return 'Error en la base de datos'
        }
    }   
}