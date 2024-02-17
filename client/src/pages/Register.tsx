import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { FormEvent, useState } from 'react';
import { Alert } from '../components/Alert';
import clientAxios from '../config/clientAxios';
import { showMessageResponse } from '../utils';
import { AxiosResponse } from 'axios';
import useAuth from '../hooks/useAuth';

export interface FormDataValues {
    name : string;
    email : string;
    password : string;
    password2 : string;
}

const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;


export const Register = () => {

    const {alert, handleShowAlert} = useAuth();
    const [sending, setSending] = useState(false);

    const {formValues, handleInputChange, reset} = useForm<FormDataValues>({
        name : "",
        email : "",
        password : "",
        password2 : ""
    });


    const {name, email, password, password2 } = formValues;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
       
        if ([name, email, password, password2].includes("")) {
            handleShowAlert("Todos los campos son obligatorios");
            return null
        }

        if (!exRegEmail.test(email)) {
            handleShowAlert("El email tiene un formato inválido");
            return null
        }

        if (password !== password2) {
            handleShowAlert("Las contraseñas no coinciden");
            return null
        }

        try {


            setSending(true)

            const {data} : AxiosResponse = await clientAxios.post('/register',{
                name,
                email,
                password
            });

            setSending(false)

           showMessageResponse("Gracias por registarte", data.msg, 'success' )
            
            
        } catch (error) {
            console.log(error);
            
        }

        reset()
    }


  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu <span className="text-slate-700">cuenta</span>
    </h1>
    {
        alert.msg && <Alert {...alert}/>
    }
    <form 
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
    >
        <div className="my-5">
            <label 
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="nombre"
            >Nombre</label>
            <input
                id="nombre"
                type="text"
                placeholder="Tu Nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                name='name'
                value={name}
                onChange={handleInputChange}
                
            />
        </div>

        <div className="my-5">
            <label 
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="email"
            >Email</label>
            <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                name='email'
                value={email}
                onChange={handleInputChange}
            />
        </div>
        <div className="my-5">
            <label 
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password"
            >Contraseña</label>
            <input
                id="password"
                type="password"
                placeholder="Contraseña de Registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                name='password'
                value={password}
                onChange={handleInputChange}
            />
        </div>

        <div className="my-5">
            <label 
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password2"
            >Repetir Password</label>
            <input
                id="password2"
                type="password"
                placeholder="Repetir tu Contraseña"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                name='password2'
                value={password2}
                onChange={handleInputChange}
            />
        </div>

        <button 
            type="submit"
            className={`${sending ? 'bg-sky-300  hover:bg-sky-300' : 'bg-sky-700  hover:bg-sky-800'}  mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointertransition-colors`} 
            disabled={sending}
        >Creá tu cuenta</button>
        
    </form>

    <nav className="text-center">
        <Link 
            className='block text-center my-5 text-slate-500 uppercase text-sm'
            to="/"
        >¿Ya tienes una cuenta? Inicia Sesión</Link>

    </nav>

</>

  )
}
