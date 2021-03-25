import React from 'react';

const Publication = props => {
    return (
        <div class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
            <div>
                <div class="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
                    <h3 class="font-serif font-bold text-gray-900 text-xl">{props.user}</h3>
                    <img class="w-full rounded-md" src="https://coffeeordie.com/wp-content/uploads/2019/03/FraserCOVER2.jpg" alt="motivation" />
                    <p class="text-center leading-relaxed">{props.content}</p>
                    <p class="text-center leading-relaxed">Likes: {props.likes}</p>
                    <p class="text-center leading-relaxed">{props.uploaDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Publication;