import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios';

const Publication = props => {
    const [nlikes,setnLikes] = useState(0);
    const [likes,setLikes] = useState(true);
    const [likelist,setLikeslist] = useState('');
    const [like_id,setLikesid] = useState(0);
    const [error,setError] = useState('');
    const addlikes= () => {
        setLikes(!likes);
        console.log(likes);
        if(likes){addLikesClick();}
        else {removeLikesClick();}
        
        numLikes(props.id);
        console.log("ID = ",props.id," ","LIKES = ",nlikes);
    };
    const removeLikesClick = () => {
        axios.get(`https://secure-lake-15708.herokuapp.com/likes/post/${props.id}`)
            .then((response) => {    
                setLikeslist(response.data);
                //console.log(nlikes);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
        var lik = <p>Loading...</p>;
        if (likelist.length > 0) {
            lik = (
                likelist.map((ele,index) => {
                    console.log(like_id, " LIKE ITERANDO");
                    setLikesid(ele.like_id);
                })
            );
        }
        console.log(like_id, " LIKE ID");
        axios.post(`https://secure-lake-15708.herokuapp.com/likes/remove/${like_id}`)
        .then(response => {
            setError('');
        }).catch(error => {
            setError('Error to like!!!! :c');
            console.log(`Error: ${error}`)
        })
    }
    const addLikesClick = () => {
        axios.post('https://secure-lake-15708.herokuapp.com/likes/add', {
            email: localStorage.getItem('email'),
            postid: props.id
        }).then(response => {
            setError('');
            console.log(response, localStorage.getItem('email'))
        }).catch(error => {
            setError('Error to like!!!! :c');
            console.log(`Error: ${error}`)
        })
    }
    function numLikes(idp) {
                    
        axios.get(`https://secure-lake-15708.herokuapp.com/likes/${idp}`)
            .then((response) => {
                //console.log("ID = ",idp);
                
                setnLikes(response.data);
                //console.log(nlikes);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
    }
    numLikes(props.id);
    return (
        <div className="min-h-screen min-w-screen bg-white flex items-center justify-center">
            <div>
                <div className="flex flex-col max-w-md bg-gray-500 px-8 py-6 rounded-xl space-y-5 items-center text-white">
                    <h3 className="font-serif font-bold text-xl">{props.user}</h3>
                    {(props.imgUrl == "" || props.imgUrl == null) ?
                        <img className="w-full rounded-md" src="https://coffeeordie.com/wp-content/uploads/2019/03/FraserCOVER2.jpg" alt="motivation" />
                        : <img className="w-full rounded-md" src={props.imgUrl} alt="motivation" />
                    }
                    <p className="text-center">{nlikes}
                    <IconButton onClick={() => addlikes() } color={likes? 'delete' : 'secondary'} aria-label="add to shopping cart">
                        <StarIcon />
                    </IconButton>
                    </p>
                    <p className="text-center leading-relaxed">{props.content}</p>
                    <p className="text-center leading-relaxed">{props.uploaDate}</p>
                </div>
            </div>
        </div>
    );
    
}

export default Publication;