"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = exports.patientRouter = exports.clinicRouter = exports.userRouter = void 0;
const userRoutes_1 = __importDefault(require("./user/userRoutes"));
exports.userRouter = userRoutes_1.default;
const clinicRoutes_1 = __importDefault(require("./clinic/clinicRoutes"));
exports.clinicRouter = clinicRoutes_1.default;
const patientRoutes_1 = __importDefault(require("./patient/patientRoutes"));
exports.patientRouter = patientRoutes_1.default;
const productRoutes_1 = __importDefault(require("./product/productRoutes"));
exports.productRouter = productRoutes_1.default;
