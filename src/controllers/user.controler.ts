import { UserService } from "../services/user.service";
import { v4 as uuidv4 } from 'uuid';

const userService = new UserService();

export const userControler = {
  getUser: (req: any, res: any) => {
    try {
      const userName = req.body.email;
      const password = req.body.password
      userService.getUser(userName,password).then((user) => {
        res.json(user);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  addUser: (req :any , res : any)=>{
    try {
      let usuario=req.body
      usuario.user_id=uuidv4()
      userService.addUser(usuario).then ((user) =>{
        res.json(user)
      })
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  },
  getUserById: (req:any , res:any)=>{
    try {
      const userId=req.params.user_id
      console.log(userId)
      userService.getUserById(userId).then ((user)=>{
        res.json(user)
      })
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  },
  updateUserBalance:(req:any , res:any)=>{
    try {
      const user_id=req.body.user_id
      const newBalance=req.body.balance
      userService.updateUserBalance(newBalance,user_id).then (resutl =>{
        res.json(resutl)
    })
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  }
};
