import { Request, Response } from "express";


export const projectsList = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Lista de Proyectos' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-LIST' 
            }) 
        } 
        
    }

export const projectStore = async (req : Request,res : Response) => { 
        try { 
            return res.status(201).json({ 
                ok : true, 
                msg :'Proyecto guardado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-STORE' 
            }) 
        } 
        
    }

export const proejectDetail = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Detalle del Proyecto' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-DETAIL' 
            }) 
        } 
        
    }

export const projectUpdate = async (req : Request,res : Response) => { 
        try { 
            return res.status(201).json({ 
                ok : true, 
                msg :'Proyecto actualizado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-UPDATE' 
            }) 
        } 
    }

export const projectRemove = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Proyecto eliminado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en PROJECT-REMOVE' 
            }) 
        } 
    }

export const collaboratorAdd = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Colaborador agregado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en ADD-COLLABORATOR' 
            }) 
        } 
    }

export const collaboratorRemove = async (req : Request,res : Response) => { 
        try { 
            return res.status(200).json({ 
                ok : true, 
                msg :'Colaborador eliminado' 
            }) 
        } catch (error) { 
            console.log(error); 
            return res.status(500).json({ 
                ok : false, 
                msg : error instanceof Error ? error.message : 'Upss, hubo un error en REMOVE-COLLABORATOR' 
            }) 
        } 
    }
 
