import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import Navbar from '../navbar/Navbar';

const Procfile = props => {


    const [error, setError] = useState();
    const { currentUser } = useAuth();

    return (
        <div className="text-center">
            <Navbar/>
            <p>Email: {currentUser.email} email del usuario</p>
            {(localStorage.getItem('role') === 'athlete' && localStorage.getItem('box') === 'null') ? 
                <button className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 float-right rounded-md m-3">Elegir Box</button>    
                : null  
            }
        </div>
    );
}

export default Procfile;