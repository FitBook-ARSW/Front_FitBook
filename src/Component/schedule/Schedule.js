import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const Schedule = props => {

    const [clases, setClases] = useState('');

    var listClases = <p>loading...</p>;

    const getClassForMyBox = () => {
        axios.get(`http://localhost:8080/class/id/${localStorage.getItem('box')}`)
            .then(response => {
                setClases(response.data);
            }).catch(error => {
                alert('Error to load clases');
            });
    }

    useEffect(() => {
        getClassForMyBox();
    }, []);

    if (clases.length > 0) {
        listClases = (
            clases.map((ele, index) => {
                return (
                    <tr key={index} className="bg-gray-700 border-b border-gray-600">
                        <th className="px-4 py-3">{ele.id}</th>
                        <th className="px-4 py-3">{ele.max}</th>
                        <th className="px-4 py-3">{ele.day}</th>
                        <th className="px-4 py-3">{ele.beginClass}</th>
                        <th className="px-4 py-3">
                            {ele.max == 0 ? <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full" disabled={true}>Inscribir</button> : <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Inscribir</button>}
                        </th>
                    </tr>
                );
            })
        );
    }

    return (
        <div>
            <Navbar />
            {localStorage.getItem('role') === 'athlete' && localStorage.getItem('box') !== 'null'
                ?
                <div>
                    <h2 className="text-5xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800">Clases</h2>
                    <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
                        <thead>
                            <tr className="text-center border-b border-gray-300">
                                <th className="px-4 py-3">Id</th>
                                <th className="px-4 py-3">Cupos</th>
                                <th className="px-4 py-3">Dia</th>
                                <th className="px-4 py-3">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listClases}
                        </tbody>
                    </table>
                </div>
                : null}

        </div>
    );
}

export default Schedule;