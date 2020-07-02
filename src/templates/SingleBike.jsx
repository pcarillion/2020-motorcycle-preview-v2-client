import React, { useState, useEffect }  from 'react'


// plugins
import {withRouter} from 'react-router-dom'
import apiHandler from "../api/APIHandler";
import { Link } from "react-router-dom";


// css
import './../styles/one-bike.css'

const SingleBike = (props) => {

    const [bike, setBike] = useState([]);

    useEffect(() => {
        apiHandler
        .get(`/bikes/one-bike-${props.match.params.id}`)
        .then((apiRes) => {
            setBike(apiRes.data);
            console.log(apiRes.data)
        })
        .catch((apiErr) => console.log(apiErr));
    }, []);

    return (
        <div className="one-bike-div">
            <div className="one-bike-image">
                <div className="one-bike-image-container">
                    <img src={`${bike.image}`} alt="" srcset=""/>
                </div>
            </div>

            <div className="transition"></div>

            <div className="one-bike-details">
                <div>
                    <h2>{bike.brand} {bike.name}</h2>
                    <p>{bike.description}</p>
                    <table className="details-table">
                        <tbody>
                            <tr>
                                <td>Bike's type</td>
                                <td>{bike.type}</td>
                            </tr>
                            <tr>
                                <td>Engine</td>
                                <td>{bike.engine} cc</td>
                            </tr>
                            <tr>
                                <td>Horsepower</td>
                                <td>{bike.horsepower} hp</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{bike.price} €</td>
                            </tr>
                            <tr>
                                <td>Available for A2</td>
                                <td>{bike.A2}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><Link to={`${bike.link}`}>See more on the brand's website</Link></p>
                    {/* {{#isFavourited bike._id user.favorites}}
                
                    {{/isFavourited}}
                     */}
                    <div className="gallery">
                        {bike.gallery && bike.gallery.map((pic, i) => {
                            return(
                                <img src={pic} alt="" class="photo-in-the-gallery"/>
                            )
                        })}}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleBike)
