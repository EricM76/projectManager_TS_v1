import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import axios from "axios";
import clientAxios from "../config/clientAxios";
import { Alert } from "../components/Alert";
import { showMessageResponse } from "../utils";

export const ConfirmAccount = () => {

  const {token} = useParams();
  const navigate = useNavigate();

  const{handleShowAlert, alert} = useAuth()

  useEffect(() => {
   
    const confirmAccount = async () => {
      try {

        const {data} = await clientAxios.get(`/checked?token=${token}`);

        showMessageResponse("Cuenta confirmada", data.msg, 'success', () => navigate('/'));
        
      } catch (error) {

        console.log(error)
        handleShowAlert(axios.isAxiosError(error) ? error.response?.data.msg : error)
      }
    }

    confirmAccount()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu <span className="text-slate-700">cuenta</span>
        </h1>
        {
        alert.msg && <Alert {...alert}/>
    }
        <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>

        <nav className="md:flex md:justify-between">
            <Link
              to={"/registrar"}
              className=" text-sky-700 block text-center my-3 text-sm uppercase "

            >
              ¿No tenés una cuenta? Registrate
            </Link>
            <Link
              to={"/"}
              className=" text-sky-700 block text-center my-3 text-sm uppercase "

            >
              ¿Estás registrado? Iniciá sesión
            </Link>
          </nav>
        </div>
    </>
  )
}
