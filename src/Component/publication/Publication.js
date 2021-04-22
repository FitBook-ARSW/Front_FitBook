import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

const Publication = props => {
    const [likes,setLikes] = useState(true);
    const addlikes= () => {
        setLikes(!likes);
        console.log(likes);
    };
    
    return (
        <div className="min-h-screen min-w-screen bg-white flex items-center justify-center">
            <div>
                <div className="flex flex-col max-w-md bg-gray-500 px-8 py-6 rounded-xl space-y-5 items-center text-white">
                    <h3 className="font-serif font-bold text-xl">{props.user}</h3>
                    {(props.imgUrl == "" || props.imgUrl == null) ?
                        <img className="w-full rounded-md" src="https://coffeeordie.com/wp-content/uploads/2019/03/FraserCOVER2.jpg" alt="motivation" />
                        : <img className="w-full rounded-md" src={props.imgUrl} alt="motivation" />
                    }
                    <p className="text-center">{props.likes}
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