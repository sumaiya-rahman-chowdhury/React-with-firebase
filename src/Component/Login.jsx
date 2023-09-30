import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault() ;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password =  e.target.password.value;
        // console.log(name,password,email)
        signInUser(email,password)
        .then(res=>{
            console.log(res.user)

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
            </div>
        </div>
      </div>
    );
};

export default Login;