import React, {useContext, useEffect,useState } from 'react'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword,onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
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
    function resetPassword(email){
        return sendPasswordResetEmail(auth,email)
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
        logout,
        resetPassword
    }
  return (
    <AuthContext.Provider value={value}>
      {!loading&&children}
    </AuthContext.Provider>
  )
}

export default AuthProvider