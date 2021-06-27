
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import AddDetails from './pages/AddDetails'
import View from './pages/View';
import ViewI from './pages/ViewI'
import Update from './pages/Update'
import Delete from './pages/Delete'

function App() {
  return( 
    <div className="App">
      <Router>
      <switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={AddDetails}/>
        <Route exact path="/view" component={View}/>
        <Route exact path="/viewI" component={ViewI}/>
        <Route exact path="/update" component={Update}/>
        <Route exact path="/delete" component={Delete}/>
      </switch>
      </Router>
    </div>
  )
}

export default App;
