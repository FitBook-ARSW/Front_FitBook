import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import '../../css/booking.css';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


const Booking = props =>{

  var today;
  var fecha;
  var finalDate;
  var finalDate1;
  var finalDate2;
  var finalDate3;
  var finalDate4;
  var finalDate5;
  var finalDate6;
  var finalDate7;
  const [publications, setSchedule] = useState('');
  const [loading, setLoading] = useState(false);
  const [asistencia1, setAsistencia1] = useState('');
  const [asistencia2, setAsistencia2] = useState('');
  const [asistencia3, setAsistencia3] = useState('');
  const [asistencia4, setAsistencia4] = useState('');
  const [asistencia5, setAsistencia5] = useState('');
  const [asistencia6, setAsistencia6] = useState('');
  const [asistencia7, setAsistencia7] = useState('');
  const [confirm1, setConfirm1] = useState('');
  const [confirm2, setConfirm2] = useState('');
  const [confirm3, setConfirm3] = useState('');
  const [confirm4, setConfirm4] = useState('');
  const [confirm5, setConfirm5] = useState('');
  const [confirm6, setConfirm6] = useState('');
  const [confirm7, setConfirm7] = useState('');
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

  

  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate1}`).then((res) => {
        setAsistencia1(res.data);
      });
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate2}`).then((res) => {
        setAsistencia2(res.data);
      });
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate3}`).then((res) => {
        setAsistencia3(res.data);
      });
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate4}`).then((res) => {
        setAsistencia4(res.data);
      });
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate5}`).then((res) => {
        setAsistencia5(res.data);
      });
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate6}`).then((res) => {
        setAsistencia6(res.data);
      });
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/asistencia/${finalDate7}`).then((res) => {
        setAsistencia7(res.data);
      });
  })


  today = new Date();
  fecha = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
  finalDate1 = fecha+" 05:30:00";
  finalDate2 = fecha+" 06:30:00";
  finalDate3 = fecha+" 08:30:00";
  finalDate4 = fecha+" 16:00:00";
  finalDate5 = fecha+" 17:00:00";
  finalDate6 = fecha+" 18:00:00";
  finalDate7 = fecha+" 19:00:00";

  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate1}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm1(res.data);
    })
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate2}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm2(res.data);
    })
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate3}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm3(res.data);
    })
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate4}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm4(res.data);
    })
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate5}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm5(res.data);
    })
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate6}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm6(res.data);
    })
  })
  useEffect(function(){
    axios.get(`https://secure-lake-15708.herokuapp.com/booking/confirm?fecha=${finalDate7}&cedula=${localStorage.getItem("cedula")}`).then((res) => {
    setConfirm7(res.data);
    })
  })

  const reservar1 = () => {
    finalDate = fecha+" 05:30:00";
    if(btnReservar1==="Reservar"){
      setBtnReservar1('Cancelar');
      setBtnColor1('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar1('Reservar');
      setBtnColor1('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  const reservar2 = () => {
    finalDate = fecha+" 06:30:00";
    if(btnReservar2==="Reservar"){
      setBtnReservar2('Cancelar');
      setBtnColor2('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar2('Reservar');
      setBtnColor2('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  const reservar3 = () => {
    finalDate = fecha+" 08:30:00";
    if(btnReservar3==="Reservar"){
      setBtnReservar3('Cancelar');
      setBtnColor3('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar3('Reservar');
      setBtnColor3('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  const reservar4 = () => {
    finalDate = fecha+" 16:00:00";
    if(btnReservar4==="Reservar"){
      setBtnReservar4('Cancelar');
      setBtnColor4('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar4('Reservar');
      setBtnColor4('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  const reservar5 = () => {
    finalDate = fecha+" 17:00:00";
    if(btnReservar5==="Reservar"){
      setBtnReservar5('Cancelar');
      setBtnColor5('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar5('Reservar');
      setBtnColor5('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  const reservar6 = () => {
    finalDate = fecha+" 18:00:00";
    if(btnReservar6==="Reservar"){
      setBtnReservar6('Cancelar');
      setBtnColor6('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar6('Reservar');
      setBtnColor6('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  const reservar7 = () => {
    finalDate = fecha+" 19:00:00";
    if(btnReservar7==="Reservar"){
      setBtnReservar7('Cancelar');
      setBtnColor7('bg-red-500 border-2 border-black hover:bg-red-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post('https://secure-lake-15708.herokuapp.com/booking/add', {
      iduser: localStorage.getItem("cedula"),
      fecha: finalDate
      });
    }else{
      setBtnReservar7('Reservar');
      setBtnColor7('bg-green-500 border-2 border-black hover:bg-green-700 text-black hover:text-white font-bold py-1 px-4 rounded');
      axios.post(`https://secure-lake-15708.herokuapp.com/booking/cancel?cedula=${localStorage.getItem("cedula")}`);
    }
  }

  return (
    <div className="text-center">
      <Navbar />
      <div className="text-center">

        <h1 className="h1 text-center text-5xl font-bold">{fecha}</h1>

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
          <li class="Asistencia">{asistencia1}/20</li>
          <li class="Staff">Santiago M</li>
          <li><button onClick={reservar1} className={btnColor1}>
            {btnReservar1}
          </button></li>
          
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">06:30-07:30</li>
          <li class="Asistencia">{asistencia2}/20</li>
          <li class="Staff">Javier L</li>
          <li><button onClick={reservar2} className={btnColor2}>
            {btnReservar2}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">08:30-09:30</li>
          <li class="Asistencia">{asistencia3}/20</li>
          <li class="Staff">Santiago M</li>
          <li><button onClick={reservar3} className={btnColor3}>
            {btnReservar3}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">16:00-17:00</li>
          <li class="Asistencia">{asistencia4}/20</li>
          <li class="Staff">Javier L</li>
          <li><button onClick={reservar4} className={btnColor4}>
            {btnReservar4}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">17:00-18:00</li>
          <li class="Asistencia">{asistencia5}/20</li>
          <li class="Staff">Nikolas B</li>
          <li><button onClick={reservar5} className={btnColor5}>
            {btnReservar5}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>

          <li class="Hora">18:00-19:00</li>
          <li class="Asistencia">{asistencia6}/20</li>
          <li class="Staff">Nikolas B</li>
          <li><button onClick={reservar6} className={btnColor6}>
            {btnReservar6}
          </button></li>

          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          <li><br/></li>
          
          <li class="Hora">19:00-20:00</li>
          <li class="Asistencia">{asistencia7}/20</li>
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