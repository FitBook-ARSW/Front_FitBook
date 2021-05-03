import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import background from '../../img/register.jpg';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Register = props => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const ccRef = useRef();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [rol, setRol] = useState('');

    const checkBox = rol => {
        console.log(rol);
        setRol(rol);
    }

    const history = useHistory();

    const returnLogin = () => {
        history.push("/")
    }

    const registerBox = () => {
        axios.post('https://secure-lake-15708.herokuapp.com/box/add', {
            name: fullNameRef.current.value,
            document: ccRef.current.value
        }).then(response => {
            console.log('Se registro un box')
        }).catch(error => {
            console.log(`Error: ${error}`)
        });
    }

    const registerEvent = async () => {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Las contraseñas no son iguales');
        }
        try {
            setError('')
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value);
            if (rol != '') {
                axios.post('https://secure-lake-15708.herokuapp.com/users/newUser', {
                    cedula: ccRef.current.value,
                    fullName: fullNameRef.current.value,
                    email: emailRef.current.value,
                    role: rol
                }).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(`Error: ${error}`)
                });
                if(rol == 'box'){
                    registerBox();
                }
                history.push("/")
            } else {
                alert("Escoge tu tipo de usuarios PLS!!");
            }
        } catch (error) {
            setError(error.toString());
        }
        setLoading(false)
    }

    return (
        <div className="w-full h-screen flex">
            <img src={background} alt="background" className="object-cover object-center h-screen w-10/12" />
            <div className="bg-gray-700 flex flex-col justify-center items-center w-5/12 shadow-lg">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">

                    <h1 className="mb-8 text-3xl text-center text-red-600">Sign Up</h1>
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
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" ref={fullNameRef} />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="numberCCUser"
                        placeholder="C.C" ref={ccRef} />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" ref={emailRef} />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" ref={passwordRef} />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" ref={confirmPasswordRef} />

                    <div className="mt-4 text-center">
                        <span className="text-red-600">Account Type</span>
                        <div className="flex justify-center mt-2">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="accountType" value="athlete" onClick={() => checkBox("athlete")} />
                                <span className="ml-2">Athlete</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio" name="accountType" value="box" onClick={() => checkBox("box")} />
                                <span className="ml-2">Box</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none my-1"
                        disabled={loading}
                        onClick={registerEvent}
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        Vive la experiencia de compartir tu pasión por el Crossfit con personas que te entenderán
                        </div>


                    <div className="text-grey-dark mt-6">
                        ¿Ya tienes cuenta?
                    <button className="no-underline border-b border-blue-500 text-blue-500" onClick={returnLogin}>
                            Login
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Register;