"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("../controllers/user.controler");
const router = express_1.default.Router();
router.post("/user", user_controler_1.userControler.getUser);
router.get("/prueba", user_controler_1.userControler.prueba);
exports.default = router;
module.exports = router;
