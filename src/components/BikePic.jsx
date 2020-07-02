import React from 'react'

const BikePic = ({photo}) => {
    console.log(photo)
    return (
        <div className='fullscreen-pic'>
            <img src={photo}/>
        </div>
    )
}

export default BikePic
