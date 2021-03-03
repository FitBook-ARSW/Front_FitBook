import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import Navbar from '../navbar/Navbar';

const Procfile = props => {


    const [error, setError] = useState();
    const { currentUser } = useAuth();

    return (
        <div className="text-center">
            <Navbar/>
            <p>Procfile</p>
            <p>{JSON.stringify(currentUser)}</p>
            <p>Email: {currentUser.email} email del usuario</p>
        </div>
    );
}

export default Procfile;