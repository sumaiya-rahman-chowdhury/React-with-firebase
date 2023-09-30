import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    }
    // console.log(children)


    const signInUser = (email,password) =>{
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
    const authInfo = {user,createUser,signInUser,logOut}

    useEffect(()=>{
     const unSubscribe =    onAuthStateChanged(auth,(user)=>{
            setUser(user)
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