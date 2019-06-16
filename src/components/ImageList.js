import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    // const imageComponent = props.images.map(image => {
    //     return (
    //         <div key={image.data.id}>
    //             <img src={image.data.url} alt="some picture"/>
    //         </div>
    //     )
    // })

    const imageComponent = props.images.map(image => {
        return <ImageCard key={image.data.id} imgUrl={image}/>
    })

    return (
        <div>
            {imageComponent}
        </div>
    )
}

export default ImageList