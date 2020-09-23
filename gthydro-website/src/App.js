import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contactpage/Contact';
import Infosection from './components/pages/Infosection';


function App() {
  return (
    <Router> 
     <Navbar/>
     <Switch>

       <Route path='/' exact component={Infosection}/>
       <Route path="/contact" exact component={Contact}/>
     </Switch>

    </Router>
  );
}

export default App;
