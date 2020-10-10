
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contactpage/Contact';
import Howitworks from './components/pages/HowWorks/Howitworks';
import Infosection from './components/pages/Infosection';
import Contactfab from "./components/Contactfab";
import Intro from "./components/pages/Introstory/Intro"
import Options from './components/pages/Options/Options';



function App() {

  const toTop = () =>{
    window.scrollTo(0,0);
  }
  return (
    <>
    <div className="myApp">
    <Router> 
      <div className="wrapper">
      
     <Navbar/>
     <Contactfab/>
     <Switch>

       <Route path='/' exact component={Infosection}/>
       <Route path="/contact" exact component={Contact}/>
       <Route path='/howitworks' exact component={Howitworks}/>
       <Route path="/projects" />
       <Route path="/news" exact component={Intro}/>
       <Route path="/whoweare" exact component={Options}/>

     </Switch>
     
     
    </div>
    
    <Footer/>
    </Router>
    </div>
   
  
 
    
    </>
  );
}

export default App;
