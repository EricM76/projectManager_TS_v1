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
exports.confirmRegister = exports.transporter = exports.generateJWT = exports.generateTokenRandom = exports.errorResponse = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const errorResponse = (res, error, origin) => {
    return res.status(error.status || 500).json({
        ok: false,
        msg: error instanceof Error ? error.message : `Upss, hubo un error en ${origin}`
    });
};
exports.errorResponse = errorResponse;
const generateTokenRandom = () => {
    const random = Math.random().toString(32).substring(2);
    const date = Date.now().toString(32);
    return random + date;
};
exports.generateTokenRandom = generateTokenRandom;
const generateJWT = (payload) => jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h'
});
exports.generateJWT = generateJWT;
exports.transporter = nodemailer_1.default.createTransport({
    host: process.env.MAIL_HOST,
    port: 2525,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    }
});
const confirmRegister = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, token } = data;
    try {
        const responseMail = yield exports.transporter.sendMail({
            from: "Project Manager <info@projectmanager.com>",
            to: email,
            subject: "Confirmá tu cuenta",
            text: "Confirmá tu registro en Project Manager",
            html: `
            <p>Hola ${name}, hacé click en el siguiente enlace:</p>
            <a href=${process.env.URL_FRONTEND}/confirmar/${token}>confirma tu cuenta<a/>
            `
        });
        console.log(responseMail);
    }
    catch (error) {
        console.log(error);
    }
});
exports.confirmRegister = confirmRegister;
