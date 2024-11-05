import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

function App() { 
 
 
    const [mode,setMode]= useState('light');  
    const [alert,setAlert]=useState("null");

    const showAlert =( Message,type)=>{
             setAlert({
                 msg: Message,
                 type: type
 
             })
              setTimeout(() => {
               setAlert(null);
             }, 2000);
    }

  const toggleMode= ()=>{

    if(mode==='dark'){
         setMode('light');
         document.body.style.backgroundColor='white'
         showAlert("Light mode has been enabled","success");
    }
     else{
      setMode('dark');
         document.body.style.backgroundColor='#2b4160';
         showAlert("Dark mode has been enabled","success");
     }
        
          
 
  }
  return (
    
    <>
     
<Navbar  title="TextUtils" home="Home"  mode={mode} toggleMode= {toggleMode} />
<Alert  alert={alert} />

<TextForm heading= "Enter your Text here" mode={mode}  showAlert={showAlert} /> 
{/* <About/> */}
    
    </>
     
  );
}

export default App;
