import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contactpage/Contact';
import howitworks from './components/pages/HowWorks/how-it-works';
import Infosection from './components/pages/Infosection';
import pdfviewer from './components/pages/pdfviewer';


function App() {
  return (
    <>
    <div className="myApp">
      <div className="wrapper">
    <Router> 
     <Navbar/>
     
     <Switch>

       <Route path='/' exact component={Infosection}/>
       <Route path="/contact" exact component={Contact}/>
       <Route path='/howitworks' exact component={howitworks}/>
       <Route path= '/aboutpdf' exact component={pdfviewer}/>
     </Switch>
     
    </Router>
    </div>
    <Footer/>
    </div>
   
  
 
    
    </>
  );
}

export default App;
