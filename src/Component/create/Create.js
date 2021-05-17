import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';

const Create = props => {

    const [hora, setHora] = useState('');
    const [dia, setDia] = useState('');
    const [max, setMax] = useState('');

    const createNewClass = () => {
        console.log(hora, dia);
        axios.post('http://localhost:8080/class/add',{
            begin: hora,
            max: max,
            document: localStorage.getItem('cedula'),
            day: dia
        }).then(response => {
            alert('Clase creada')
        }).catch(error => {
            console.log(error)
            alert('Error al crear la clase')
        })
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col h-screen bg-gray-100">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-white rounded-lg shadow-md lg:shadow-lg">
                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Crear Clase
                        </h2>
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Horario</label>
                        <div className="relative inline-flex">
                            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                            <select onChange={e => setHora(e.target.value)} className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                <option>6:00 am</option>
                                <option>7:00 am</option>
                                <option>8:00 am</option>
                                <option>9:00 am</option>
                                <option>10:00 am</option>
                                <option>4:00 pm</option>
                                <option>5:00 pm</option>
                                <option>6:00 pm</option>
                                <option>7:00 pm</option>
                                <option>8:00 pm</option>
                            </select>
                        </div>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Dia</label>
                        <div className="relative inline-flex">
                            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                            <select onChange={e => setDia(e.target.value)} className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sabado</option>
                            </select>
                        </div>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Cupos</label>
                        <input type="number" placeholder="10"
                            onChange={e => setMax(e.target.value)}
                            class="block w-full py-3 px-1 mt-2 mb-4
                                    text-gray-800 appearance-none 
                                    border-b-2 border-gray-100
                                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />
                        <button type="submit"
                            onClick={createNewClass}
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                                    font-medium text-white uppercase
                                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Crear
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Create;