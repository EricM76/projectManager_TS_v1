import { PropsWithChildren, createContext, useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";


export interface Auth {
    _id? : string;
    name? : string;
    email? : string;
}

export interface AuthContextProps {
    auth: Auth;
    setAuth : React.Dispatch<React.SetStateAction<Auth>>;
    alert : {
        msg: string
    };
    handleShowAlert : (msg : string) => void;
    loading : boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


const AuthProvider = ({children} : PropsWithChildren) => {

    const [alert, setAlert] = useState({
        msg : ""
    });

    const handleShowAlert = (msg: string) => {
        setAlert({
            msg
        });
        
        setTimeout(() => {
            setAlert({
                msg : ""
            })
        },3000)
    };

    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const signIn = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                setLoading(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clientAxios('/users/profile', config)
                console.log(data);
                
                setAuth(data.user)
                // navigate('/proyectos')

            } catch (error) {
                setAuth({})
            } 

            setLoading(false)
        }
        signIn()
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                alert,
                handleShowAlert,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;