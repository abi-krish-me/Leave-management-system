import React from 'react';
import {Link} from 'react-router-dom';
import './View.css'
import {useState}  from 'react';
import Axios from 'axios'

const View = () => {
    const [employeeList,setEmployeeList]=useState([])
    const getEmployees=()=>{
        Axios.get('http://localhost:3001/view').then((response)=>{
          setEmployeeList(response.data);
          console.log(response);
        })
      }
    return (
      <div className="View">
          <div className="content">
          <h1>VIEW ALL THE EMPLOYEE DETAILS OF ALL THE EMPLOYEES</h1>
          <button onClick={getEmployees}>VIEW DETAILS OF EMPLOYEES</button>
          <Link to="/"><button>BACK TO MENU</button></Link>
          </div>
          {employeeList.map((val,key)=>{
        return <div className="employee">
          <div>
          <h3>Name:{val.name}</h3>
          <h3>Position:{val.position}</h3>
          <h3>Casual Leave:{val.casualLeave}</h3>
          <h3>Medical Leave:{val.medicalLeave}</h3>
          <h3>Annual Leave:{val.annualLeave}</h3>
          </div>

          </div>
      })}
    
      </div>
      
    );
  };
  
  export default View;