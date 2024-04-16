
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import About from './component/About';
// import { Switch } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
 
// } from "react-router-dom";


function App() {

  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const switchmode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.background = '#121212';
      showAlert("Dark mode enable", "success")
      document.title = "Textutils - DarkMode enable";

      // setInterval(()=>{
      //   document.title = "Textutils - Install";
      // },1000);

      // setInterval(()=>{
      //   document.title = "Textutils - Hacked";
      // },500);

    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light mode enable", "success")
      document.title = "Textutils - LightMode enable";
    }
  }

  return (

<>
    {/* <Router> */}
      
        <Navbar title="TextUtils" Mode={Mode} switchmode={switchmode} />
        <Alert info={alert} />

        {/* <Switch>
          <Route exact path="/"> */}
            {<div className="container ">
              <Textarea header="Enter Text Here" Mode={Mode} showAlert={showAlert} />
            </div>}
          {/* </Route>
          <Route exact path="/about"> */}
            {/* <About Mode={Mode}/> */}
          {/* </Route> */}

        {/* </Switch> */}


    {/* </Router> */}
    </>
  );
}

export default App;
