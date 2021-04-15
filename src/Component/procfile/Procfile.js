import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Procfile = props => {


    const [visible, setVisible] = useState(false);
    const [boxes, setBoxes] = useState('');
    const [image, setImage] = useState('');
    const { currentUser } = useAuth();

    const history = useHistory();

    const enrollUserToBox = (mail, boxId) => {
        axios.post(`https://secure-lake-15708.herokuapp.com/users/${mail}/${boxId}`)
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
                localStorage.setItem('box', 'null');
                alert('¡Te saliste del BOX!');
            }).catch(error => {
                alert('Error al salir del box');
            })


    }

    const uploadImageProcfile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'fitbookimg')
        const res = await fetch("https://api.cloudinary.com/v1_1/fitbook-arsw/image/upload",
            {
                method: 'POST',
                body: data
            })
        const file = await res.json()
        setImage(file.secure_url)
        console.log(file.secure_url)
    }

    const postUrlPhoto = () => {
        axios.post(`http://localhost:8080/users/${localStorage.getItem('email')}`,{url:image})
            .then(response => {
                alert('Se Actualizó la foto')
        })
            .catch(error => {
                console.log(error)
                alert(error)

            });
        console.log(image)
        localStorage.setItem('url',image);
    }

    const processToUpdatePhoto = e => {
        uploadImageProcfile(e);
        postUrlPhoto();
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
            <div className="flex flex-col">
                <div className="flex-initial">
                    {(localStorage.getItem('role') == 'athlete' && localStorage.getItem('box') == 'null') ?
                        <button onClick={showBoxes} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 min-w-auto rounded-md m-3">Elegir Box</button>
                        : null
                    }

                    {(localStorage.getItem('role') == 'athlete' && localStorage.getItem('box') != 'null') ?
                        <button onClick={unrollForBox} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 min-w-auto rounded-md m-3">Salirme del Box</button>
                        : null
                    }
                </div>
                {localStorage.getItem('role') == 'athlete' ?
                    <div className="flex justify-center">
                        <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                            <img src="https://stewartmktg.files.wordpress.com/2020/06/cxuwkesucaarakm.jpg?w=1024" class="w-full" />
                            <div className="flex justify-center -mt-8">
                                {localStorage.getItem('url') != 'null' ?
                                    <img src={localStorage.getItem('url')} class="rounded-full border-solid border-white border-2 -mt-3" />
                                    : <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3" />
                                }
                            </div>
                            <div className="text-center px-3 pb-6 pt-2">
                                <h3 className="text-black text-sm bold font-sans">{localStorage.getItem('fullName')}</h3>
                                {localStorage.getItem('box') != 'null' ?
                                    <p className="text-sm">Box: {localStorage.getItem('box')}</p>
                                    : null
                                }
                                <p className="text-sm">{localStorage.getItem('role')}</p>
                                <p className="text-sm">{localStorage.getItem('email')}</p>
                            </div>
                            <div className="flex items-center justify-center bg-white">
                                <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span className="mt-2 text-base leading-normal">Select a Photo</span>
                                    <input className="hidden" type="file" name="file" onChange={processToUpdatePhoto} />
                                </label>
                            </div>
                        </div>
                    </div>
                    : null}

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
        </div>
    );
}

export default Procfile;