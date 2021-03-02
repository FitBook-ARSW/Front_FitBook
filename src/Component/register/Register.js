import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Register = props => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const registerEvent = async () => {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Las contraseñas no son iguales');
        }
        try {
            setError('')
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value);
        } catch (error) {
            setError(error + 'Error al crear el usuario');
        }
        setLoading(false)
    }

    return (
        <div class="w-full h-screen flex">
            <img src="https://wallpapercave.com/wp/wp4507164.jpg" alt="background" class="object-cover object-center h-screen w-10/12" />
            <div class="bg-gray-700 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-gray-500 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center text-red-600">Sign up</h1>
                        {error}
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" ref={fullNameRef} />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" ref={emailRef} />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" ref={passwordRef} />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" ref={confirmPasswordRef} />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none my-1"
                            disabled={loading}
                            onClick={registerEvent}
                        >Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            Vive la experiencia de compartir tu pasión por el Crossfit con personas que te entenderán
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        ¿Ya tienes cuenta?
                    <a class="no-underline border-b border-blue-500 text-blue-500" href="../login/">
                            Login
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Register;