
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  // const switchToGreenBG = ()=>{
  //   if(mode === 'light'){
  //     setMode('#00FF00');
  //     document.body.style.backgroundColor = '#00FF00';
  //     showAlert('Green Mode Enabled','success');
  //   } else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");

    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      {/* <Navbar title="textUtils" home="home"/> */}
      <Navbar title="textUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
