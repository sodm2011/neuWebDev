import React from 'react';
import * as client from './client';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [credientials, setCredientials] = useState({
        username: '',
        password: ''});
    const navigate = useNavigate();
    const signIn = async () => {
        const user = await client.signIn(credientials);
        console.log("in signin get user", user);
        if (user) {
            navigate('../account');
        }
    };
    return (
        <div>
            <h1>Sign In</h1>
            <div>
                <label>Username</label>
                <input
                    value={credientials.username}
                    onChange={(e) => setCredientials({...credientials, username: e.target.value})}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    value={credientials.password}
                    onChange={(e) => setCredientials({...credientials, password: e.target.value})}
                />
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}
export default SignIn;