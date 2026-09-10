import {useState} from 'react'
export function Estados(){
    const[ likes, setLikes]= useState(0);
    const darLike=()=>{setLikes(likes + 1)};
    const DisLike=()=>{setLikes(likes - 1)};


    return (
        <div>
            <h1>Likes {likes}</h1>
            <button 
                onClick={darLike}> Dar Like
            </button>
            <button 
                onClick={DisLike}> DisLike
            </button>
        </div>
    )

}