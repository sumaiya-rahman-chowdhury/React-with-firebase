import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import auth from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const {signInUser,googleSignin,googleProvider} = useContext(AuthContext);
    const nav = useNavigate()
    const handleLogin = e =>{
        e.preventDefault() ;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password =  e.target.password.value;
        // console.log(name,password,email)
        signInUser(email,password)
        .then(res=>{
            console.log(res.user)
            e.target.reset() ;
            nav('/')
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const google = ()=>{
        googleSignin(auth,googleProvider)
        .then(res=>{
            const credential=GoogleAuthProvider.credentialFromResult(res)
            const token = credential.token ;
            const user = res.user ;
           console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    
    return (
      <div>
        
          <div  className="form-div">
            
            <div>
            <h1>Login</h1>
                <form action="" onSubmit={handleLogin}>
                <input type="text" name="name" />
                    <input type="email" name="email"  />
                    <input type="password" name="password" />
                    <button type="submit">Login</button>
                    
                </form>
                <Link to='/reg'>Register</Link>
                    <Link to='/'>Home</Link>

                <button onClick={google}>Google</button>    
            </div>
        </div>
      </div>
    );
};

export default Login;