import React from 'react'


// css
import '../styles/about.css'

export default function About() {
    return (
        <div className='about-div'>
            <h2>About us</h2>
            <h4>Developers and riders... the Pauls who created this website!</h4>
            <div>
                <div className='pres-div'>
                    <img src="./../../paulcarillion.jpeg" alt="Paul Carillion" className="profile-picture"/>
                    <div className='pres-info-div'>
                        <h3>Paul Carillion</h3>
                        <p>Hi! My name is Paul! I'm a fullstack developer 
                        and love riding motorcycles. I have a Kawasaki ER6-F 
                        of 2010 and I enjoy great trips around France. The motorcycle
                        of my dreams would be an Aprilia RSV 4 as I love sportsbikes.</p>
                        <p>You can check my <a href='https://paul-carillion.net' className="pres-link">portfolio</a> to see my projects.</p>
                    </div>
                </div>
                <div className='pres-div'>
                    <img src="" alt="Paul Dikerson" className="profile-picture"/>
                    <div className='pres-info-div'>

                    </div>
                </div>
            </div>
            <h4>Copyright &copy; - Paul Dikerson and Paul Carillion - 2020 - All rights reserved</h4>
        </div>
    )
}
