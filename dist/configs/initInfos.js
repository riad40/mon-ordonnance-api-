"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultClinic = exports.defaultUser = void 0;
const defaultUser = {
    fullName: process.env.DOCTOR_FULL_NAME,
    email: process.env.DOCTOR_EMAIL,
    password: process.env.DOCTOR_PASSWORD,
    speciality: process.env.DOCTOR_SPECIALITY,
    dateOfBirth: process.env.DOCTOR_DATE_OF_BIRTH,
    inpe: process.env.DOCTOR_INPE,
    phone: process.env.DOCTOR_PHONE,
    avatar: "",
};
exports.defaultUser = defaultUser;
const defaultClinic = {
    name: process.env.CLINIC_NAME,
    address: process.env.CLINIC_ADDRESS,
    city: process.env.CLINIC_CITY,
    phone: process.env.CLINIC_PHONE,
    email: process.env.CLINIC_EMAIL,
    fax: process.env.CLINIC_FAX,
    owner: "",
};
exports.defaultClinic = defaultClinic;
