import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import Navbar from '../navbar/Navbar';

const Procfile = props => {


    const [error, setError] = useState();
    const { currentUser } = useAuth();

    return (
        <div>
            <Navbar/>
            <p>Procfile</p>
            <p>{JSON.stringify(currentUser)}</p>
            <p>Email: {currentUser.email}</p>
        </div>
    );
}

export default Procfile;