import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import Alert from "./Component/Alert";
import About from "./Component/About";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#737373";
      showAlert("darkmode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode is enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm heading={"Enter the Text"} mode={mode} showAlert={showAlert}/>  
    
      {/* <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/" element={<TextForm heading={"Enter the Text"} mode={mode} showAlert={showAlert}/>}/>
        </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;

