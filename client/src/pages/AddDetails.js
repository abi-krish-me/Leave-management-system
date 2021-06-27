import React from 'react';
import {useState} from "react";
import './AddDetails.css'
import {Link} from 'react-router-dom';
import Axios from 'axios';

const AddDetails = () => {
  const [name,setName]=useState("");
  const [position,setPosition]=useState("");
  const [casualLeave,setCasual]=useState(7);
  const [medicalLeave,setMedical]=useState(7);
  const [annualLeave,setAnnual]=useState(14);
  const [disabled,setDisabled]=useState(true);
  const [disabled2,setDisabled2]=useState(true);

  
  const addEmployee=()=>{
    Axios.post('http://localhost:3001/create',{
      name:name.toLowerCase(),
      position:position.toLowerCase(),
      casualLeave:casualLeave,
      medicalLeave:medicalLeave,
      annualLeave:annualLeave,
    }).then(()=>{
      console.log("success");
      alert('successfully added')
    })
  }

  const displayInfo=()=>{
    
    console.log(name+position+casualLeave+medicalLeave+annualLeave);
  };
  
    return (
      
      <div>
          <h1>ADD EMPLOYEES TO DATABASE<hr/></h1>
          <div className="information">
      <label>Name:</label>
      <input type="text" placeholder="enter name" onChange={(event)=> {
        setName(event.target.value);
        setDisabled(false)
        }} />
      <label>Position:</label>
      <input type="text" placeholder="enter position" onChange={(event)=> {
        setPosition(event.target.value);
        setDisabled2(false)
        }}/>
      <label>Casual Leaves:</label>
      <input type="number" value="7" disabled="true" />
      <label>Medical Leaaves:</label>
      <input type="number" value="7" disabled="true" onChange={(event)=> {
        setMedical(7);
        }}/>
      <label>Annual Leaves:</label>
      <input type="number" value="14" disabled="true" onChange={(event)=> {
        setAnnual(14); 
        }}/>
      <Link to=""><button disabled={disabled,disabled2} onClick={addEmployee}>ADD EMPLOYEE</button></Link>
      <Link to="/"><button>BACK TO MENU</button></Link>
      </div>
      </div>  
    );
  };
  
  export default AddDetails;
  