

import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"

import { useState } from 'react';

const RegistrationForm = () => {

  const [eye , setEye] = useState(false);
  const [eye2 , setEye2] = useState(false);

  const [formData, setFormData] = useState({
    // username: '',
    // email: '',
    // password: '',

 
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here using formData
    console.log('Registration data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input
          type="text"
          name="fname"
      
     
        />
      </label> <br></br>
      <label>
        LastName:
        <input
          type="text"
          name="lname"
        />
      </label><br></br>
      <label>
        Email:
        <input
          type="email"
          name="email"
          
        />
      </label><br></br>
      <label>
        UserName:
        <input
          type="text"
          name="username"
         
        />
      </label><br></br>
      <label>
        Password:
        <input
          type={eye ? 'text':'password'}
          name="password"
         
        />
      </label> <button onClick={()=>setEye(!eye)}>{eye ? 'hide' : 'show'}</button><br></br>
      
      <label>
        ConfirmPassword:
        <input
          type= {eye2 ? 'text' : "password"}
          name="cpassword"
          
        />
      </label>  <button onClick={()=>setEye2(!eye2)}> {eye2 ? <i className='bi bi-eye-slash'></i> : <i className='bi bi-eye'></i>}</button><br></br>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
