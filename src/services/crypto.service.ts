import { CryptoPOJO } from './../data/models/crypto.model';
import { CryptoRespository } from "../data/respositories/crypto.repository";
import { CryptoDTO } from "../types";



export class CryptoService{
    _cryptorepository:CryptoRespository

    constructor(){
        this._cryptorepository = new CryptoRespository()
    }

    async getAllCoins() : Promise <CryptoDTO[]>{
        const cryptoPromise : CryptoDTO[] = await this._cryptorepository.getAllCoins().then(result =>{
            if(!!result){
                return this.convertirPOJOArrayaDTOArray(result)
            }else{
                return []
            }
        }).catch (error =>{
            console.log(error)
            throw error
        })
        return cryptoPromise
    }
    async updateStockCoin(crypto_id:number,stock:number) :Promise <string>{
        const updatePromise:string = await this._cryptorepository.updateStockCoin(crypto_id,stock).then(resutl =>{
            if(!!resutl){
                return resutl
            }else{
                return 'El servicio a fallado'
            }
        }).catch(error =>{
            console.log(error)
            throw error
        })
        return updatePromise
    }
    convertirPOJOArrayaDTOArray(user:CryptoPOJO[]){
        let usuario:CryptoDTO[]=<CryptoDTO[]>user
        return usuario
    }    
}