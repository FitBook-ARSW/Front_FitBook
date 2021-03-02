import React from 'react';

const Register = props => {
    return (
        <div class="w-full h-screen flex">
            <img src="https://wallpapercave.com/wp/wp4507164.jpg" alt="background" class="object-cover object-center h-screen w-10/12" />
            <div class="bg-gray-700 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-gray-500 px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center text-red-600">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none my-1"
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