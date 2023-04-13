import { CryptoPOJO } from './../models/crypto.model';
import { connect } from "../config/db.config"
import { CryptoUsersPOJO } from '../models/crypto-users.model';



export class CryptoRespository{
    _database:any = {}
    _cryptorepository:any
    _cryptoUserRepository:any

    constructor(){
        this._database = connect()
        this._cryptorepository = this._database.sequelize.getRepository(CryptoPOJO)
        this._cryptoUserRepository = this._database.sequelize.getRepository(CryptoUsersPOJO)
    }
    async getAllCoins():Promise <CryptoPOJO[]>{
        try {
            return await this._cryptorepository.findAll()
        } catch (error) {
            console.error(error)
            return []
        }
    }
    async updateStockCoin(crypto_id:number,stock:number):Promise<string>{
        try {
                await this._cryptorepository.update({
                stock:stock
            },{where:{crypto_id:crypto_id}})
            return 'Stock Actualizado'
        } catch (error) {
            console.log(error)
            return 'Fallo a la hora de actualizar'
        }
    }
}