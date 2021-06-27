import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
      <div className="Home">
        <h1><u><b>LEAVE MANAGEMENT SYSTEM</b></u><hr/></h1>
        <h2>MENU<hr/></h2>
          <div className="conten">
          
          <Link to="/add"><button>Add Employee</button></Link><br/>
          <Link to="/view"><button>View ALL Employee Details</button></Link><br/>
          <Link to="/viewI"><button>View By Entering Name</button></Link><br/>
          <Link to="/update"><button>Update Leaves By Entering Name</button></Link><br/>
          <Link to="/delete"><button>Delete Employee</button></Link>
          </div>
      </div>  
    );
  };
  
  export default Home;
  