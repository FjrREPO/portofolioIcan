import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [UnameOrEmail, setUnameOrEmail] = useState("");
    const [password, setpassword] = useState("");

    const user = {
        email: "icanbejo@gmail.com",
        username: "bejo",
        password: "bejo100"
    };
    const handlesubmit = (e) => {
        e.preventDefault();

        if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
        if (password === user.password) {
            console.log("User Loged In");
            navigate("/admin");
        } else {
            console.log("wrong password");
        }
        } else {
        console.log("please check you username or Email");
        }
    };

    const login = () => {
        localStorage.setItem('login', true)
    }

    return (
        <div>
            <form onSubmit={handlesubmit} className='admin__loginform'>
                <div className="admin__childloginform">
                    <h1 className="admin__loginh1">Login</h1>
                <label htmlFor="Email or UserName" className="admin__loginhead">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    className="admin__logininputlink"
                    required
                    value={UnameOrEmail}
                    onChange={(e) => setUnameOrEmail(e.target.value)}
                />
                <label htmlFor="Password" className="admin__loginhead">Password</label>
                <input
                    type="Password"
                    placeholder="Password"
                    className="admin__logininputlink"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button type="submit" className="admin__loginbuttonsave" onClick={login}>Log in</button>
                </div>
            </form>
        </div>
    );
};
export default Login;