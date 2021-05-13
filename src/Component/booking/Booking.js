import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import '../../css/booking.css';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


const Booking = props =>{

  const [publications, setSchedule] = useState('');
  const [loading, setLoading] = useState(false);
  const [btnReservar1, setBtnReservar1] = useState('Reservar');
  const [btnReservar2, setBtnReservar2] = useState('Reservar');
  const [btnReservar3, setBtnReservar3] = useState('Reservar');
  const [btnReservar4, setBtnReservar4] = useState('Reservar');
  const [btnReservar5, setBtnReservar5] = useState('Reservar');
  const [btnReservar6, setBtnReservar6] = useState('Reservar');
  const [btnReservar7, setBtnReservar7] = useState('Reservar');
  const [btnColor1, setBtnColor1] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
  const [btnColor2, setBtnColor2] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
  const [btnColor3, setBtnColor3] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
  const [btnColor4, setBtnColor4] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
  const [btnColor5, setBtnColor5] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
  const [btnColor6, setBtnColor6] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
  const [btnColor7, setBtnColor7] = useState('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');

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

  const reservar1 = () => {
    if(btnReservar1==="Reservar"){
      setBtnReservar1('Cancelar');
      setBtnColor1('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar1('Reservar');
      setBtnColor1('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  const reservar2 = () => {
    if(btnReservar2==="Reservar"){
      setBtnReservar2('Cancelar');
      setBtnColor2('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar2('Reservar');
      setBtnColor2('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  const reservar3 = () => {
    if(btnReservar3==="Reservar"){
      setBtnReservar3('Cancelar');
      setBtnColor3('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar3('Reservar');
      setBtnColor3('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  const reservar4 = () => {
    if(btnReservar4==="Reservar"){
      setBtnReservar4('Cancelar');
      setBtnColor4('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar4('Reservar');
      setBtnColor4('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  const reservar5 = () => {
    if(btnReservar5==="Reservar"){
      setBtnReservar5('Cancelar');
      setBtnColor5('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar5('Reservar');
      setBtnColor5('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  const reservar6 = () => {
    if(btnReservar6==="Reservar"){
      setBtnReservar6('Cancelar');
      setBtnColor6('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar6('Reservar');
      setBtnColor6('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  const reservar7 = () => {
    if(btnReservar7==="Reservar"){
      setBtnReservar7('Cancelar');
      setBtnColor7('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }else{
      setBtnReservar7('Reservar');
      setBtnColor7('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
    }
  }

  return (
    <div className="text-center">
      <Navbar />
      <div className="text-center">
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
          <li><button onClick={reservar1} className={btnColor1}>
            {btnReservar1}
          </button></li>
          
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">06:30-07:30</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Javier L</li>
          <li><button onClick={reservar2} className={btnColor2}>
            {btnReservar2}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">08:30-09:30</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Santiago M</li>
          <li><button onClick={reservar3} className={btnColor3}>
            {btnReservar3}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">16:00-17:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Javier L</li>
          <li><button onClick={reservar4} className={btnColor4}>
            {btnReservar4}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">17:00-18:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Nikolas B</li>
          <li><button onClick={reservar5} className={btnColor5}>
            {btnReservar5}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">18:00-19:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Nikolas B</li>
          <li><button onClick={reservar6} className={btnColor6}>
            {btnReservar6}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          
          <li class="Hora">19:00-20:00</li>
          <li class="Asistencia">0/20</li>
          <li class="Staff">Santiago M</li>
          <li><button onClick={reservar7} className={btnColor7}>
            {btnReservar7}
          </button></li>

        </ol>
      </div>
    </div>
  );
}

export default Booking;