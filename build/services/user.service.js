"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_respository_1 = require("./../data/respositories/user.respository");
class UserService {
    constructor() {
        this._userRepository = new user_respository_1.UserRespository();
    }
    getUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository.getUser(username).then(userPojo => {
                if (!!userPojo) {
                    return userPromise;
                }
                else {
                    return undefined;
                }
            }).catch(error => {
                console.error('Entro en el servicio' + error);
                throw error;
            });
            return userPromise;
        });
    }
}
exports.UserService = UserService;
