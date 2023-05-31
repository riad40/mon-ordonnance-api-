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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UsersController {
    /**
     * @route GET /users/:id
     * @description Show one user
     * @access Public
     */
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json(user);
        });
    }
    /**
     * @route PUT /users/:id
     * @description Update one user
     * @access Public
     */
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const updatedUser = yield User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(updatedUser);
        });
    }
    /**
     * @route PATCH /users/:id/avatar
     * @description Update user avatar
     * @access Public
     */
    updateAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const avatar = req.file && `/images/${req.file.filename}`;
            console.log(req.file);
            const updateAvatar = yield User_1.default.findByIdAndUpdate(req.params.id, { avatar }, { new: true });
            return res.status(200).json(updateAvatar);
        });
    }
}
exports.default = new UsersController();
