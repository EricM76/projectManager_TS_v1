import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { FormEvent } from 'react';
import useAuth from '../hooks/useAuth';
import { Alert } from '../components/Alert';
import axios from 'axios';
import clientAxios from '../config/clientAxios';

export interface FormDataValues {
    email : string;
    password : string;
}


export const Login = () => {

    const {alert, handleShowAlert} = useAuth();

    const {formValues, handleInputChange, reset} = useForm<FormDataValues>({
        email : "",
        password : "",
    });

    const {email, password} = formValues;


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if ([email, password].includes("")) {
            console.log(formValues);
            
            handleShowAlert("Todos los campos son obligatorios");
            return null
        }

        try {

            const responseAxios = await clientAxios.post('/login', {
                email,
                password
            })

            console.log(responseAxios);
            
            
        } catch (error) {

            console.log(error);
            

            handleShowAlert(axios.isAxiosError(error) ? error.response?.data.msg : error)

        }

        reset()
        
    }



  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia <span className="text-slate-700">sesión</span>
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

            <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
            
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/registrar"
            >¿No tienes una cuenta? Regístrate</Link>

            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/olvide-password"
            >Olvide Mi Password</Link>
        </nav>
    
    </>

  )
}
