import React, { useState } from "react";

export default function TextForm(props) {
  const [text,setText]=useState('Enter text');
  const onChange=(event)=>{

    setText(event.target.value)
  }

  const handleOnClick=()=>{
    
    let newText=text;
    let x=newText.toUpperCase();
    setText(x);

    
  }
  const clearOnClick=()=>{
    let newText=text.replace(/\s+/g, ' ').trim() 
    setText(newText)
  }

  function myFunction() {
    // Get the text field
    let copyText = document.getElementById("exampleFormControlTextarea1");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Message is copied","success")
  }
  return (
    <div className={`className="container"`}>
      
      <h1 className={`heading text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}
          id="exampleFormControlTextarea1"
          rows={8}
          defaultValue={""}
          value={text}
          onChange={onChange}
        />
        <button type="button" onClick={handleOnClick} className="btn btn-primary mt-4" >
          To Uppercase
        </button>
        <button type="button" onClick={clearOnClick} className="btn btn-primary mt-4 mx-3" >
          Remove space
        </button>

        <button type="button" onClick={myFunction} className="btn btn-primary mt-4 mx-3" >
         Copy text
        </button>
      </div>
    </div>
  );
}
