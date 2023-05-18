import React, {useContext, useEffect,useState } from 'react'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
const AuthContext=React.createContext()

export const  useAuth=()=> {
    return useContext(AuthContext)
}

export const AuthProvider =({children})=> {
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
        
    }
    function logout(){
        return auth.signOut()
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    
    const value={
        currentUser,
        signup,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={value}>
      {!loading&&children}
    </AuthContext.Provider>
  )
}

export default AuthProvider