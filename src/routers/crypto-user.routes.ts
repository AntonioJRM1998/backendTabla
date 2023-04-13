import { cryptoUserControler } from './../controllers/crypto-user.controler';
import  express  from 'express';


const router = express.Router();

router.post('/update',cryptoUserControler.updateCoinsTable)
router.post('/getCoinsByIds',cryptoUserControler.getCoinByCryptoId)


export default router;
module.exports = router;