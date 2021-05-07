import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'
import logo from '../../img/fitbook.png';
const Navbar = props => {

    const [error, setError] = useState();
    const { logout } = useAuth();

    const history = useHistory();

    const redirectProcfile = () => {
        history.push("/procfile");
    }

    const redirectPublication = () => {
        history.push("/dashboard");
    }

    const redirectBookings = () => {
        history.push("/bookings");
    }

    const actionLogout = async () => {
        setError('');
        try {
            await logout();
            localStorage.clear();
            history.push("/");
        } catch (error) {
            setError('Error al realizar el logout');
        }
    }

    return (
        <div className="shadow-md w-full bg-red-500 p-5 text-white">
            <nav className="flex justify-between">
                <div>
                    <img className="object-scale-down w-12 h-12" src={logo}/>
                </div>
                <ul className="flex flex-row">
                    <li className="pr-5"><button variant="link" onClick={redirectBookings}>Reservar</button></li>
                    <li className="pr-5"><button variant="link" onClick={redirectPublication}>Publicaciones</button></li>
                    <li className="pr-5"><button variant="link" onClick={redirectProcfile}>Perfil</button></li>
                    <li className="pr-5"><button variant="link" onClick={actionLogout}>Cerrar sesion</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;