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
const Clinic_1 = __importDefault(require("../models/Clinic"));
const initDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        fullName: process.env.DOCTOR_FULL_NAME,
        email: process.env.DOCTOR_EMAIL,
        password: process.env.DOCTOR_PASSWORD,
        speciality: process.env.DOCTOR_SPECIALITY,
        dateOfBirth: process.env.DOCTOR_DATE_OF_BIRTH,
        inpe: process.env.DOCTOR_INPE,
        phone: process.env.DOCTOR_PHONE_NUMBER,
        avatar: "",
    };
    const clinic = {
        name: process.env.CLINIC_NAME,
        address: process.env.CLINIC_ADDRESS,
        city: process.env.CLINIC_CITY,
        phone: process.env.CLINIC_PHONE_NUMBER,
        email: process.env.CLINIC_EMAIL,
        fax: process.env.CLINIC_FAX_NUMBER,
        owner: "",
    };
    try {
        // Create a new user
        const usersCount = yield User_1.default.countDocuments();
        const clinicsCount = yield Clinic_1.default.countDocuments();
        if (usersCount > 0 && clinicsCount > 0)
            return;
        const newUser = new User_1.default(user);
        yield newUser.save();
        // Create a new clinic
        const newClinic = new Clinic_1.default(clinic);
        newClinic.owner = newUser._id;
        yield newClinic.save();
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = initDb;
