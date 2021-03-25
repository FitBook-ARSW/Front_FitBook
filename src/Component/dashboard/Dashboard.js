import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Publication from '../publication/Publication'
import axios from 'axios';

const DashBoard = props => {

    const [publications, setPublications] = useState('');
    const [loading, setLoading] = useState(false);

    const getPublications = () => {
        axios.get('https://secure-lake-15708.herokuapp.com/publications')
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

    if(publications.length > 0){
        publi = (
            publications.map(ele => {
                return(<Publication user={ele.userId} likes={ele.likes} content={ele.content} uploaDate={ele.uploaDate}/>);
            })
        );
    }



    return (
        <div className="text-center">
            <Navbar />
            {publi}
        </div>
    );
}

export default DashBoard;