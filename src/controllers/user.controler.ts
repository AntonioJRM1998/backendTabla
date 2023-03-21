import { UserService } from "../services/user.service";

const userService = new UserService();

export const userControler = {
  getUser: (req: any, res: any) => {
    try {
      const userName = req.body.username;
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
      const usuario=req.body
      userService.addUser(usuario).then ((user) =>{
        res.json(user)
      })
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  },
};
