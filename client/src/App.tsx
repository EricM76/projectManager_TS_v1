import { AuthProvider } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { ForgetPassword } from './pages/ForgetPassword'
import { ConfirmAccount } from './pages/ConfirmAccount'

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
    </Routes>
  </AuthProvider>
  )
}

export default App
