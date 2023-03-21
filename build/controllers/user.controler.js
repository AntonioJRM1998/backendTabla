"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControler = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
exports.userControler = {
    getUser: (req, res) => {
        try {
            const userName = req.param.id;
            userService.getUser(userName).then((user) => {
                res.json(user);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },
    prueba: (_req, res) => {
        res.send("Hola");
    },
};
