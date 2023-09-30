import { useContext } from "react";
import { Link } from "react-router-dom";
import  { AuthContext } from "./AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    // console.log(createUser)
    const handleRegister = e =>{
        e.preventDefault() ;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password =  e.target.password.value;
        // console.log(name,password,email)
        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(error=>{
            console.log(error.message)
        })

    }
    return (
       <div>
        
         <div  className="form-div">
            <div>
                <h1>Register</h1>
                <form action="" onSubmit={handleRegister}>
                    <input type="name" name="name" />
                    <input type="email" name="email"  />
                    <input type="password" name="password"  />
                    <button type="submit">Register</button>
                    <Link to='/login'>Login</Link>
                    <Link to='/'>Home</Link>
                </form>
            </div>
            
        </div>
       
       </div>
    );
};

export default Register;