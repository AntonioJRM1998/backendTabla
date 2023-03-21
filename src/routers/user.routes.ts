import  express  from 'express';
import { userControler } from "../controllers/user.controler";

const router = express.Router();

router.post("/user", userControler.getUser);
router.post("/addUser", userControler.addUser)


export default router;
module.exports = router;
