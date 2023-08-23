import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
//   const [mode,setMode]=useState("light");

// const toggleMode=()=>{
//   if(mode==="light"){
//     setMode("dark");
//   }
//   else{
//     setMode("light")
//   }
// }

const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
        setAlert({
          message:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500)
}


  return (
   <>
    <Router>
   <Navbar title="TextUtils" aboutText="About TextUtils"/>
   <Alert alert={alert} />
   <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={ <About />} />
    <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Try TextUtils"/>} />
    </Routes>
   </div>
    </Router>
   </>
  );
}

export default App;
