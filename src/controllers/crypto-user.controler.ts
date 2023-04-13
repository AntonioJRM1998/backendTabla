import { CryptoUsersService } from "../services/crypto-users.service";
import { CyptoUserDTO } from "../types";


const cryptoUserservice = new CryptoUsersService


export const cryptoUserControler = {
    updateCoinsTable: (req:any , res:any) =>{
        const body:CyptoUserDTO = req.body
        try {
            cryptoUserservice.updateCryptoUserTable(body).then(result =>{
                res.json(result)
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }

    },
    getCoinByCryptoId : (req:any , res:any) =>{
        const crypto_id=req.body.crypto_id
        const user_id = req.body.user_id
        try {
            cryptoUserservice.getCoinByCryptoId(crypto_id,user_id).then (resutl =>{
                res.json(resutl)
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }
}