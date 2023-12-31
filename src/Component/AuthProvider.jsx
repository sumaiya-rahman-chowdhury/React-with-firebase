import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const googleSignin = () =>{

        return signInWithPopup (auth,googleProvider)
    }





    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    // console.log(children)


    const signInUser = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            alert("Sign Out")
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const authInfo = {user,createUser,signInUser,logOut,loading,googleSignin,googleProvider}

    useEffect(()=>{
     const unSubscribe =    onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])


    return (
    
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;