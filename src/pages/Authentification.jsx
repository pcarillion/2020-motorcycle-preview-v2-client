import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from "react-router";


// css
import '../styles/auth.css'

// js
import APIHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";


// page for the log in and sign up

const Auth = (props) => {

    const [signin, setMode] = useState(true);

    const toggleMode = () => {
        setMode(signin => !signin)
    }

    const [user, setUser] = useState({
      mail: "",
      password: ""
    });
    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;
    const [error, setError] =useState("")


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/auth/signup", user);
      console.log(apiRes)
      setCurrentUser(apiRes.data.currentUser);
    
      props.history.push('/mybikes')
    } catch (err) {   
      setCurrentUser(null);
      setError("Les identifiants sont incorrects.")
    }
  };
  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  }

    return (
        <div className='auth-div'>
            {signin? <h2>Log in</h2> : <h2>Sign up</h2>}
            {signin?<form onChange={handleChange} onSubmit={handleSubmit}>
                <div className="inputs">
                    {/* <label htmlFor="mail">Email</label> */}
                    <input type="text" name="mail" className="text-input" placeholder="Email" defaultValue="paul@gmail.com"/>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" className="text-input" name="password" placeholder="Password" defaultValue="1234"/>
                </div>

                <button>Enter</button>
                <p>No account yet? Please register <span className="span-onclick" onClick={()=>toggleMode()}>here</span></p>
            </form> : 
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div className="inputs">
                    {/* <label htmlFor="mail">Email</label> */}
                    <input type="text" name="mail" className="text-input" placeholder="Email" defaultValue="apul@gmail.com"/>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" className="text-input" name="password" placeholder="Password" defaultValue="1234"/>
                </div>

                <button>Enter</button>
                <p>Already have an account? You can log in <span className="span-onclick" onClick={()=>toggleMode()}>here</span></p>
            </form>}
            <img className="gear-svg" src="../../2020motorcyclepreviews2.svg"/>
        </div>
    )
}

export default withRouter(Auth)
