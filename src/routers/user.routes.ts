import  express  from 'express'
import { userControler } from "../controllers/user.controler"

const router = express.Router();

router.post("/getUser", userControler.getUser)
router.post("/addUser", userControler.addUser)
router.get('/getUserById/:user_id',userControler.getUserById)
router.post("/update", userControler.updateUserBalance)


export default router;
module.exports = router;
