import React,{useContext, useState ,useEffect} from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()


export const AuthProvider = ({children}) => {
    
    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const [currentUser, setCurrentUser] = useState('')
    const value = {
        currentUser,
        signUp
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => (
            setCurrentUser(user)
        ))
        return unsubscribe
    },[])
    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}

export function useAuth(){
    return useContext(AuthContext)
}