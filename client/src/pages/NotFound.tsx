import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
<>
<h1 className="text-sky-600 font-black text-6xl capitalize">Página <span className="text-slate-700">no encontrada</span>
    </h1>
    <nav className="text-center">
            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/"
            >Volver al inicio</Link>
        </nav>
</>    
    
  )
}
