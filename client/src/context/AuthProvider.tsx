import { PropsWithChildren, createContext, useEffect, useState } from "react";
import clientAxios from "../config/clientAxios";

interface Auth {
    _id? : string,
    name? : string,
    email? : string,
}

export interface AuthContextProps {
    auth : Auth;
    setAuth : React.Dispatch<React.SetStateAction<Auth>>
    alert : {
        msg: string
    };
    handleShowAlert : (msg : string) => void;
    loading : boolean;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({children} : PropsWithChildren) => {

    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState({});
    const [alert, setAlert] = useState({
        msg : ""
    });

    useEffect(() => {

        const signIn = async() => {
            const token = localStorage.getItem('tokenPM');

            if(!token){
                setLoading(false);
                return null
            }

            try {
                const {data} = await clientAxios.get('/profile',{
                    headers : {
                        "Content-Type" : "application/json",
                        Authorization : `Bearer ${token}`
                    }
                })

                setAuth(data.user)
                
            } catch (error) {
                console.log(error);
                setAuth({})
                
            } finally {
                setLoading(false)
            }
        }

        signIn()
    
    }, []);

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

    const signOut = () => setAuth({})
    
    
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                alert,
                handleShowAlert,
                loading,
                signOut
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