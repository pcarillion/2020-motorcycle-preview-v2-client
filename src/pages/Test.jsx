import React, {useEffect, useState} from 'react'

import APIHandler from './../api/APIHandler'


const Test = () => {

    const [allBikes, setAllBikes] = useState([])
    useEffect(() => {
        const rv = APIHandler.get("bikes/collection")
        .then (res => 
            {
            console.log(res)
            setAllBikes(res.data)})
    }, [])


    return (
        <div>
            <ul>
                {allBikes.map((bike, i) =>{
                    return (<li>
                        {bike.name}
                    </li>)
                } )}
            </ul>
        </div>
    )
}

export default Test
