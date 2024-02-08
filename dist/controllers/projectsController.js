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
exports.collaboratorRemove = exports.collaboratorAdd = exports.projectRemove = exports.projectUpdate = exports.proejectDetail = exports.projectStore = exports.projectsList = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const projectsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find().where("createdBy").equals(req.user);
        return res.status(200).json({
            ok: true,
            msg: 'Lista de Proyectos',
            data: projects
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-LIST'
        });
    }
});
exports.projectsList = projectsList;
const projectStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(201).json({
            ok: true,
            msg: 'Proyecto guardado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-STORE'
        });
    }
});
exports.projectStore = projectStore;
const proejectDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Detalle del Proyecto'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-DETAIL'
        });
    }
});
exports.proejectDetail = proejectDetail;
const projectUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(201).json({
            ok: true,
            msg: 'Proyecto actualizado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-UPDATE'
        });
    }
});
exports.projectUpdate = projectUpdate;
const projectRemove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Proyecto eliminado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-REMOVE'
        });
    }
});
exports.projectRemove = projectRemove;
const collaboratorAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Colaborador agregado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en ADD-COLLABORATOR'
        });
    }
});
exports.collaboratorAdd = collaboratorAdd;
const collaboratorRemove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Colaborador eliminado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en REMOVE-COLLABORATOR'
        });
    }
});
exports.collaboratorRemove = collaboratorRemove;
