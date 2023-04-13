import { CryptoService } from "../services/crypto.service";


const cryptoservice = new CryptoService


export const cryptoControler = {
    getAllCoins: (_req:any , res:any) =>{
        try {
            cryptoservice.getAllCoins().then((coins)=>{
                res.json(coins)
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    },
    updateStockCoin: (req:any , res:any )=>{
        try {
            const crypto_id = req.body.crypto_id
            const stock = req.body.stock
            cryptoservice.updateStockCoin(crypto_id,stock).then(result =>{
                res.json(result)
            })
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }
}