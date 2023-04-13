import { cryptoControler } from './../controllers/crypto.controler';
import  express  from 'express';


const router = express.Router();

router.get('/getCoins',cryptoControler.getAllCoins)
router.post('/update',cryptoControler.updateStockCoin)


export default router;
module.exports = router;
