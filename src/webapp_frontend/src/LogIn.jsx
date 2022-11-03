
import * as React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import { webapp_backend } from '../../declarations/webapp_backend/index';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
            const res = await webapp_backend.logIn(user,pwd);
            console.log("res");
            console.log(res);
            if(res==true){
                alert("login successful")
                setSuccess(true);
            }else{
                alert("Invalid credentials!");
                setSuccess(false);
            }
       
    }
    return<>{success ? (
        <section  className="main">
            <div className="sub-main">
            <h1>welcome {user}!</h1>
            <br />
            <p>
            <Link to="/signup">Log Out</Link>
            </p>
            </div>
        </section>
    ) : (
        <section className="main">
            <div className="sub-main">
            <h1>Sign In</h1><div>
            <form onSubmit={handleSubmit}  >
                <input
                    type="text"
                    id="username"
                    placeholder="username" 
                    className="name"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="password" 
                    className="name"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p className="link">
            New user?
            <Link to="/signup">Sign Up</Link>
            </p>
            </div>
            </div>
        </section>
    )}</>
}

export default Login;