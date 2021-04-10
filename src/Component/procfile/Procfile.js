import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import Navbar from '../navbar/Navbar';
import axios from 'axios';

const Procfile = props => {


    const [visible, setVisible] = useState(false);
    const [boxes, setBoxes] = useState('');
    const { currentUser } = useAuth();

    const enrollUserToBox = (mail, boxId) => {
        axios.post(`https://seclocalStorage.getItem('box')ure-lake-15708.herokuapp.com/users/${mail}/${boxId}`)
            .then(response => {
                console.log(response);
                alert('¡Te inscribiste correctamente!');
            }).catch(error => {
                console.log(`Error: ${error}`)
            });
        localStorage.setItem('box', boxId);
        setVisible(false);
    }

    const showBoxes = () => {
        if (visible) {
            setVisible(false)
        }
        else {
            axios.get('https://secure-lake-15708.herokuapp.com/box')
                .then(response => {
                    console.log(response.data);
                    setBoxes(response.data);
                })
                .catch(error => {
                    alert(`${error}`);
                })
            setVisible(true);
        }
    }

    const unrollForBox = () => {
        axios.post(`https://secure-lake-15708.herokuapp.com/users/box/${localStorage.getItem('email')}`)
            .then(response => {
                localStorage.setItem('box','null');
                alert('¡Te saliste del BOX!');
            }).catch(error => {
                alert('Error al salir del box');
            })
    }

    let data = (
        <p>Loading...</p>
    );

    if (boxes.length > 0) {
        data = (
            boxes.map((ele, index) => {
                return (
                    <tr key={index} className="bg-gray-700 border-b border-gray-600">
                        <th className="px-4 py-3">{ele.id}</th>
                        <th className="px-4 py-3">{ele.name}</th>
                        <th className="px-4 py-3">
                            <button onClick={() => enrollUserToBox(localStorage.getItem('email'), ele.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
                        </th>
                    </tr>
                )
            })
        );
    }

    return (
        <div className="text-center">
            <Navbar />
            <p>Email: {currentUser.email} email del usuario</p>
            {(localStorage.getItem('role') === 'athlete' && localStorage.getItem('box') === 'null') ?
                <button onClick={showBoxes} className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 min-w-auto rounded-md m-3">Elegir Box</button>
                : null
            }

            {(localStorage.getItem('role') === 'athlete' && localStorage.getItem('box') !== 'null') ? 
                <button onClick={unrollForBox} className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 min-w-auto rounded-md m-3">Salirme del Box</button>
                : null            
            }

            {visible ?
                <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
                    <thead>
                        <tr className="text-center border-b border-gray-300">
                            <th className="px-4 py-3">Id</th>
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3">Seleccionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
                : null}
        </div>
    );
}

export default Procfile;