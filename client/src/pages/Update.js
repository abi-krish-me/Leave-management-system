import React from 'react';
import {Link} from 'react-router-dom';
import './View.css'
import {useState}  from 'react';
import Axios from 'axios'

const Update = () => {
    const [p,setName]=useState("")
    const [employeeList,setEmployeeList]=useState([])
    const [newCasualLeave,setNewCasualLeave]=useState(0)
    const [newMedicalLeave,setNewMedicalLeave]=useState(0)
    const [newAnnualLeave,setNewAnnualLeave]=useState(0)
    const getEmployees=()=>{
        Axios.get('http://localhost:3001/view').then((response)=>{
          setEmployeeList(response.data);
          console.log(response);
          {employeeList.map((val,key)=>{
            if(val.name!=p){
              return alert("name not exists")
            }
         })}
        })
      }
      const updateCasualLeave=(employeeID)=>{
        Axios.put("http://localhost:3001/updateC",{casualLeave:newCasualLeave,employeeID:employeeID}).then((response)=>{
          alert("updated casual leave");
          setEmployeeList(employeeList.map((val)=>{
            return val.employeeID==employeeID ? {id:val.id,name:val.name,position:val.position,casualLeave:newCasualLeave,medicalLeave:val.medicalLeave,annualLeave:val.annualLeave}:val 
          }))
        })
      }
      const updateMedicalLeave=(employeeID)=>{
        Axios.put("http://localhost:3001/updateM",{medicalLeave:newMedicalLeave,employeeID:employeeID}).then((response)=>{
          alert("updated medical leave");
          setEmployeeList(employeeList.map((val)=>{
            return val.employeeID==employeeID ? {id:val.id,name:val.name,position:val.position,casualLeave:val.casualLeave,medicalLeave:newMedicalLeave,annualLeave:val.annualLeave}:val 
          }))
        })
      }
      const updateAnnualLeave=(employeeID)=>{
        Axios.put("http://localhost:3001/updateA",{annualLeave:newAnnualLeave,employeeID:employeeID}).then((response)=>{
          alert("updated annual leave");
          setEmployeeList(employeeList.map((val)=>{
            return val.employeeID==employeeID ? {id:val.id,name:val.name,position:val.position,casualLeave:val.casualLeave,medicalLeave:val.medicalLeave,annualLeave:newAnnualLeave}:val 
          }))
        })
      }
    return (
        <div className="View">
        <div className="content">
        <h1>UPDATE LEAVE DETAILS OF EMPLOYEE BY ENTERING NAME</h1>
        <label>Name:</label>
          <input type="text" placeholder="enter name"
          onChange={(event)=> {
          setName(event.target.value);
          }} />
        <Link><button onClick={getEmployees}>VIEW INDIVIDUAL DETAILS OF EMPLOYEES</button></Link>
        <Link to="/"><button>BACK TO MENU</button></Link>
        </div>
     
<div>
         {employeeList.filter(name => name.name==p).map(filteredName => (
              <div className="employee">
                  
                  <div>    
                  <h3>Name:{filteredName.name}</h3>
                  <h3>Position:{filteredName.position}</h3>
                  <h3>Casual Leaves:{filteredName.casualLeave}</h3>
                  <h3>Medical Leaves:{filteredName.medicalLeave}</h3>
                  <h3>Annual Leaves:{filteredName.annualLeave}</h3>
                  </div>
                  <div>
                      <input type="text" placeholder="enter remaining casual leaves"
                      onChange={(event)=> {
                        setNewCasualLeave(event.target.value);
                        }}/>
                      <button onClick={()=>{updateCasualLeave(filteredName.employeeID)}}>Update Casual Leave</button>
                      <input type="text" placeholder="enter remaining medical leaves"
                      onChange={(event)=> {
                        setNewMedicalLeave(event.target.value);
                        }}/>
                      <button onClick={()=>{updateMedicalLeave(filteredName.employeeID)}}>Update Medical Leave</button>
                      <input type="text" placeholder="enter remaining annual leaves"
                      onChange={(event)=> {
                        setNewAnnualLeave(event.target.value);
                        }}/>
                      <button onClick={()=>{updateAnnualLeave(filteredName.employeeID)}}>Update Medical Leave</button>
                  </div>
              
              </div>
              ))} 
        </div>
    </div>
      
    );
  };
  
  export default Update;