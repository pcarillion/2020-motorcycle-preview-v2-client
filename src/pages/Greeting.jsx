import React from 'react'

// js
import {Link} from 'react-router-dom'

const Greeting = () => {
    return (
        <div className="greeting-div">
                    <img className="gear-svg" src="../../2020motorcyclepreviews2.svg"/>

            <div>
                <p>
                    Your account has successufully been created.
                </p>
                <p>
                    Welcome to our application.
                </p>
                <p>
                    You can <Link to="/authentification">log in</Link> and create your own bike collection.
                </p>
            </div>

        </div>
    )
}

export default Greeting
