import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import '../../css/booking.css';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

const Booking = props =>{

  const [publications, setSchedule] = useState('');
    const [loading, setLoading] = useState(false);

  const history = useHistory();

  const getSchedule  = () => {
    axios.get('https://secure-lake-15708.herokuapp.com/bookings')
        .then(response => {
            setLoading(false);
            setSchedule(response.data);

        })
        .catch(error => {
            console.log(`Error: ${error}`)
        });
}


useEffect(() => {
    getSchedule();
}, [])

  return (
    <div className="text-center">
      <Navbar />
      <div className="div text-center">
        <h1 className="text-center leading-relaxed">{props.uploaDate}</h1>

        <ol className="ol text-center">
          <li class="principal">Hora</li>
          <li class="principal">Asistencia</li>
          <li class="principal">Staff</li>
          <li class="principal">Acciones</li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">05:30-06:30</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Santiago M</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">06:30-07:30</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Javier L</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">08:30-09:30</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Santiago M</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">16:00-17:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Javier L</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">17:00-18:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Nikolas B</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">18:00-19:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Nikolas B</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li class="Hora">19:00-20:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Santiago M</li>
          <li><button className="bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded">Reservar</button></li>
        </ol>
      </div>
    </div>
  );
}

export default Booking;