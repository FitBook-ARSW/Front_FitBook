import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import background from '../../img/login.jpg';
import logo from '../../img/fitbook.png';
import axios from 'axios';

const Login = props => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const dashboardEvent = async () => {
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            console.log(emailRef.current.value)
            axios.get(`https://secure-lake-15708.herokuapp.com/users/email/${emailRef.current.value}`)
                .then(response => {
                    localStorage.setItem('email',response.data.email);
                    localStorage.setItem('role',response.data.role);
                    localStorage.setItem('cedula',response.data.cedula);
                    localStorage.setItem('box',response.data.boxId);
                    localStorage.setItem('fullName',response.data.fullName)
                    localStorage.setItem('url',response.data.url)
                    console.log(localStorage.getItem('url'));
                })
                .catch(error => alert('Error in Procfile'));
            history.push("/dashboard");
        } catch (error) {
            setError(error+'Error al autenticar');
        }
        setLoading(false)
    }
    const history = useHistory();
    
    const redirectRegister = () => {
        history.push("/register");
    }

    return (
        <div className="w-full h-screen flex">
            <img src={background} alt="background" className="object-cover object-center h-screen w-7/12" />
            <div className="bg-gray-700 flex flex-col justify-center items-center w-5/12 shadow-lg">
                {error !== '' ?
                    <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Error
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 mb-3">
                            <p>{error}</p>
                        </div>
                    </div> : null
                }
                <img className="object-scale-down w-22 h-22" src={logo}/>
                <h1 className="text-3xl font-bold text-red-500 mb-2">LOGIN</h1>
                <div className="w-1/2 text-center">
                    <input type="text" ref={emailRef} name="username" placeholder="username" autoComplete="off"
                        className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
                    <input type="password" ref={passwordRef} name="password" placeholder="password" autoComplete="off"
                        className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
                    <div className="inline-flex">
                        <button className="bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-l"
                            onClick={dashboardEvent}>Sign In</button>
                        <button className="bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-r"
                            onClick={redirectRegister}>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;