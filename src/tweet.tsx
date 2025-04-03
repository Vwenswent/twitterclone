// Tweet.js
import React, { useState } from 'react';

/* 
Create a new component called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can use whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/



export default function Tweet(props: any) {
    const [liked, setLiked] = useState(false);
    const [likedCount, setLikedCount] = useState(props.likes);

    return(
        <> 
            <div className='tweet'>
                <h3>@{props.username}</h3>
                <p>{props.content}</p>
                <p>{props.timestamp} ago</p>
                <button onClick={()=>{
                    setLiked(!liked);
                    setLikedCount(liked ? likedCount - 1 : likedCount + 1)
                    }}>
                    {liked ? '❤️' : '🤍'}{likedCount} likes
                </button>
            </div>
        </>
    );
}
