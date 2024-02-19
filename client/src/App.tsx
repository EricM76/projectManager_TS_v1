import { AuthProvider } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { ForgetPassword } from './pages/ForgetPassword'
import { ConfirmAccount } from './pages/ConfirmAccount'
import ProtectedLayout from './layouts/ProtectedLayout'
import Project from './pages/Project'
import ProjectAdd from './pages/ProjectAdd'
import Projects from './pages/Projects'
import ProjectEdit from './pages/ProjectEdit'

function App() {

  return (
  <AuthProvider>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='/registrar' element={<Register/>}/>
          <Route path='/confirmar/:token' element={<ConfirmAccount/>}/>
          <Route path='olvide-password' element={<ForgetPassword/>}/>
          <Route path='*' element={<NotFound/>}></Route>
      </Route>
      <Route path="/proyectos" element={<ProtectedLayout />}>
          <Route index element={<Projects />} />
          <Route path="crear-proyecto" element={<ProjectAdd/>} />
          <Route path=":id" element={<Project />} />
          <Route path="editar/:id" element={<ProjectEdit />} />
      </Route>
    </Routes>
  </AuthProvider>
  )
}

export default App
