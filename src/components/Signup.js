import React, { useState } from "react";
import { Link,useHistory} from "react-router-dom";
import './Signup.css'

const Signup = () => {
const history=useHistory();
const [login, setLogin] = useState({

"name": "",

"email": "",

"password": "",

});

const signUpForm = (e) => {
    e.preventDefault();
// localStorage.setItem("loginDetails",JSON.stringify(login));
localStorage.setItem("loginDetails",JSON.stringify(login));
history.push('/login');
alert('Acount Successfully Created! Login to Continue');

};

return (

<div className='Signup'>
<Link to='/'>
                <img
                    className="Signup__logo"
                    src='https://i.pinimg.com/originals/95/f8/58/95f8588d6469a16271ea2d2fad419d00.png' 
                    alt=''
                />
        </Link>

<div className='Signup_container'>
<h1>Sign Up</h1>
<form onSubmit={signUpForm}>
<label>Name</label>

<input

type="text"

name="name"

value={login.name}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>



<label>E-mail</label>

<input

type="email"

name="email"

value={login.email}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>



<label>password</label>

<input

type="password"

name="password"

value={login.password}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>
<div className="Signup_Checkbox" >
<input type='checkbox' name="signup"/> 
<label>Agree Terms and Conditions.</label>    
</div>
{/* <Link to='/login'> */}
    <button  className='Signup_Button'>Sign Up</button>
{/* </Link> */}
</form>
</div>
</div>

);

};

export default Signup;