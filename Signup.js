import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup(){

  async function postData(url = '', data) {
  
    axios.get('http://localhost:3001/customers').then((response) => {
     // setbackend(response.data);
      console.log(response.data);

      // Default options are marked with *
  axios({
    method: 'post',
    
    url: 'http://localhost:3001/createcustomer',
    data: {
      name : name,
      email : email,
       password : password,
       phone : phone,
    }
    });
  }
  

    
    let [name,setname] = useState("")
    let [password,setpassword] = useState("")
    let [email,setemail] = useState("")
    let [phone,setphone] = useState("")

    const handleemail = (e) =>{
        setemail(e.target.value);
        console.log(email);
    }

    const handlepass = (e) =>{
        setpassword(e.target.value);
        console.log(password)
    }

    const handlename = (e) =>{
        setname(e.target.value);
        console.log(name)
    }

    const handlephone = (e) =>{
        setphone(e.target.value);
        console.log(phone);
    }

    const navigate = useNavigate();

    

    const changeAuthMode = () => {
      navigate('/')
    }

    const submitform = () => {
      if(name !== "" && email !== "" && password !=="" && phone!=="")
      {
        changeAuthMode();
        postData('http://localhost:3001/createcustomer','Daniyal');
      }
    }

    
  

    return(
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text" required
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                value = {name}
                onChange={handlename}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email" required
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={handleemail}
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                type="text" required
                className="form-control mt-1"
                placeholder="+92----"
                onChange={handlephone}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password" required
                className="form-control mt-1"
                placeholder="Password"
                onChange={handlepass}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={submitform}>
                Submit
              </button>
            </div>
             
          </div>
        </form>
      </div>
    )
}
