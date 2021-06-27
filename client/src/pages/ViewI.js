import React from 'react';
import {Link} from 'react-router-dom';
import './View.css'
import {useState}  from 'react';
import Axios from 'axios'

const View = () => {
    const [p,setName]=useState("")
    const [employeeList,setEmployeeList]=useState([])
    const getEmployees=()=>{
        Axios.get('http://localhost:3001/view').then((response)=>{
          setEmployeeList(response.data);
          console.log(response);
          {employeeList.map((val,key)=>{
             if(val.name!=p){
               alert("name not exists")
               return console.log("name not exist")
             }
          })}
        
        })
      }
    return (
      <div className="View">
          <div className="content">
          <h1>VIEW INDIVIDUAL DETAILS OF EMPLOYEE BY ENTERING NAME</h1>
          <label>Name:</label>
            <input type="text" placeholder="enter name"
            onChange={(event)=> {
            setName(event.target.value);
            }} />
          <Link><button onClick={getEmployees}>VIEW INDIVIDUAL DETAILS OF EMPLOYEES</button></Link>
          <Link to="/"><button>BACK TO MENU</button></Link>
          </div>
       
<div>
           {employeeList.filter(name => name.name===p).map(filteredName => (
                <div className="employee">
                    <div>
                    <h3>Name:{filteredName.name}</h3>
                    <h3>Position:{filteredName.position}</h3>
                    <h3>Casual Leaves:{filteredName.casualLeave}</h3>
                    <h3>Medical Leaves:{filteredName.medicalLeave}</h3>
                    <h3>Annual Leaves:{filteredName.annualLeave}</h3>
                </div>
                </div>
                ))} 
          </div>
      </div>
      
    );
  };
  
  export default View;