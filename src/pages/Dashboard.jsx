import React, { useState, useEffect } from 'react'


// css
import '../styles/dashboard.css'

// js
import apiHandler from "../api/APIHandler";


// plugins 
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
      apiHandler
        .get("/bikes/collection")
        .then((apiRes) => {
          setBikes(apiRes.data);
          console.log(apiRes.data);
        })
        .catch((apiErr) => console.log(apiErr));
    }, []);
  

    return (
        <div className="dashboard-div">
            <h2>Dashboard</h2>

            <table className="adminTable">
                <thead className="tableTitle">
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Engine</th>
                        <th>Horsepower</th>
                        <th>Available for A2</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bikes.map((bike, i) => {
                        return (
                            <tr className="admin-bikeRow">
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.brand}</Link></td>
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.name}</Link></td>
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.type}</Link></td>
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.engine}cc</Link></td>
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.horsepower}</Link></td>
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.A2? "Yes": "No"}</Link></td>
                                <td><Link href={`/bike-${bike._id}`} target="_blank">{bike.price}€</Link></td>
                                <td><a href="/admin/edit/{{this._id}}">EDIT</a></td>
                                <td><a href="/admin/delete/{{this._id}}">X</a></td>
                            </tr>
                                )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard