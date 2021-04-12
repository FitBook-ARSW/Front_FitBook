import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Publication from '../publication/Publication'
import axios from 'axios';

const DashBoard = props => {

    const [publications, setPublications] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const redirectAddPublication = () => {
        history.push("/addPublication");
    }

    const getPublications = () => {
        axios.get('http://localhost:8080/publications')
            .then(response => {
                setLoading(false);
                console.log(response.data);
                setPublications(response.data);

            })
            .catch(error => {
                console.log(`Error: ${error}`)
            });
    }

    useEffect(() => {
        getPublications();
    }, [])

    var publi = <p>Loading...</p>;

    if (publications.length > 0) {
        publi = (
            publications.map((ele,index) => {
                return (<Publication key={index} user={ele.mail} likes={ele.likes} content={ele.content} uploaDate={ele.uploaDate} imgUrl={ele.imgUrl} />);
            })
        );
    }



    return (
        <div className="text-center">
            <Navbar />
            <button className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 float-right rounded-md m-3" onClick={redirectAddPublication}>Añadir Publicación</button>
            <div className="overflow-auto h-auto">
                {publi}
            </div>

        </div>
    );
}

export default DashBoard;