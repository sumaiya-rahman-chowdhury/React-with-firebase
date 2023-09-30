import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const Home = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
            <h1>This is home</h1>
            <Link to='/login' style={{ margin: '10px' }}> Login</Link>
            <Link to='/reg'>Register</Link>
            <Link to='/order'>Orders</Link>
            <Link to='/profile'>Profile</Link>
            <div>
                {
                    user ? <div>
                        <h1>Name : {user.displayName
                        }</h1>
                        <h1>{user.email}</h1>

                    </div> : ''
                }
            </div>

            <button onClick={logOut}>Sign Out</button>
        </div>
    );
};

export default Home;