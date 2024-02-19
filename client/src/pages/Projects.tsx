import { Link } from "react-router-dom"
import { Alert } from "../components/Alert"
import useAuth from "../hooks/useAuth"


const Projects = () => {

  const { alert } = useAuth()
  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>

      {
        alert.msg && <Alert {...alert} />

      }

      <div className="bg-white shadow mt-10 rounded-lg ">
        <Link to={'id'}>
            Test Project
        </Link>
        <p className=" text-center text-gray-600 uppercase  p-5">No hay proyectos aún</p>
      </div>
    </>
  )
}

export default Projects