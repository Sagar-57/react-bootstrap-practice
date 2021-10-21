import React from "react";
import "./style.css";
import 'bootstrap';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
 function App() {
  return (
    <div>
      <Navbar/>
   <Home/>
   <About/>
   <Contact/> 
   </div>
  );
}
export default App;
