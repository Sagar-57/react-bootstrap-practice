import React from "react";
import "./style.css";
import 'bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
 function App() {
  return (
    <div>
   <Home/>
   <About/>
   <Contact/> 
   </div>
  );
}
export default App;
