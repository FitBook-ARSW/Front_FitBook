import React from 'react';
import { useHistory } from "react-router-dom";

const Login = props => {
    const history = useHistory();
    const redirectRegister = () => {
        history.push("/register");
    }

    return (
        <div className="w-full h-screen flex">
            <img src="https://wallpapercave.com/wp/wp2056219.jpg" alt="background" class="object-cover object-center h-screen w-7/12" />
            <div className="bg-gray-700 flex flex-col justify-center items-center w-5/12 shadow-lg">
                <h1 className="text-3xl font-bold text-red-500 mb-2">LOGIN</h1>
                <div className="w-1/2 text-center">
                    <input type="text" name="username" placeholder="username" autocomplete="off"
                        className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
                    <input type="password" name="password" placeholder="password" autocomplete="off"
                        className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
                    <div className="inline-flex">
                    <button className="bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-l">Sign In</button>
                    <button className="bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={redirectRegister}>Register</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;