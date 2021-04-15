import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const AddPublication = props => {

    const [content, setContent] = useState('');
    const contentRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("")
    const [files, setFiles] = useState();

    const history = useHistory();

    const redirectDashboard = () => {
        history.push("/dashboard");
    }

    const addPublicationClick = () => {
        axios.post('https://secure-lake-15708.herokuapp.com/publications/add', {
            content: content,
            imgUrl: image,
            mail: localStorage.getItem('email')
        }).then(response => {
            setError('');
            console.log(response, localStorage.getItem('email'))
        }).catch(error => {
            setError('Error to post!!!! :c');
            console.log(`Error: ${error}`)
        })

        redirectDashboard();
    }

    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file',files[0])
        data.append('upload_preset','fitbookimg')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/fitbook-arsw/image/upload",
        {
            method: 'POST',
            body: data
        })
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div>
            <Navbar />
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 float-right rounded-md m-3" onClick={redirectDashboard}>Back</button>
            <div className="min-w-md min-h-screen flex justify-center items-center">
                {error}
                <div className="bg-gray-700 rounded-md p-7">
                    <label className="block">
                        <span className="text-white">Post Content: </span>
                        <textarea onChange={event => setContent(event.target.value)} className="resize border rounded-md mt-1 block w-full h-20 rounded-md" />
                        <div>
                            <button onClick={addPublicationClick} ref={contentRef} className="block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 float-right rounded-md m-3">Add</button>
                            <input className="block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 float-right rounded-md m-3" type="file" name="file" placeholder="Upload an Image" onChange={uploadImage} />
                        </div>
                    </label>
                    {
                        loading ? <p>Loading...</p> : <img src={image} style={{width: '300px'}}/>
                    } 
                </div>
            </div>
        </div>
    );
}

export default AddPublication