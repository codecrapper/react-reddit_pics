import React from 'react'

const ImageCard = (props) => {
    return (
        // <div class="ui card">
        //     <a class="image" href="#">
        //         <img src={props.imgUrl.data.url} />
        //     </a>
        //     <div class="content">
        //         <a class="header" href="#">Steve Jobes</a>
        //         <div class="meta">
        //         <a>Last Seen 2 days ago</a>
        //         </div>
        //     </div>
        // </div>

        <div class="ui card">
            <a class="image" href="#">
                <img src={props.imgUrl.data.url} />
            </a>
            <div class="content">
                <button class="right floated">View Post</button>
                <a class="header" href="#">Steve Jobes</a>
                <div class="meta">
                <a>Last Seen 2 days ago</a>
                </div>
            </div>
        </div>
    )
}

export default ImageCard