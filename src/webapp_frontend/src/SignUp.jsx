
import * as React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import { webapp_backend } from '../../declarations/webapp_backend/index';


const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
            const res = await webapp_backend.createNewAccount(user,pwd);
            console.log("res");
            console.log(res);
            if(res==true){
                alert("Sign Up successful")
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
            <Link to="/login">Log Out</Link>
            </p>
            </div>
        </section>
    ) : (
        <section className="main">
            <div className="sub-main">
            <h1>Sign Up!</h1><div>
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
                <button>Submit</button>
            </form>
            <p className="link">
            Already have account?
            <Link to="/signup"> Sign In</Link>
            </p>
            </div>
            </div>
        </section>
    )}</>
}

export default SignUp;