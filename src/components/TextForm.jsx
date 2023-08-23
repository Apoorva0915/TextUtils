import React, { useState } from 'react'

export default function TextForm(props) {
   
    const handleUpClick=()=>{
        console.log("uppercase was clicked "+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleDownClick=()=>{
        console.log("lowercase was clicked "+ text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleClearClick=()=>{
        console.log("Clear was clicked "+ text)
        let newText=("");
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    
    const handleSpeakClick=()=>{
        // console.log("lowercase was clicked "+ text)
        let newText=new SpeechSynthesisUtterance();
        newText.text=text;
       window.speechSynthesis.speak(newText);
       props.showAlert("Text spoken","success")
    }
    const handleOnChange=(event)=>{
        console.log("On changed")
        setText(event.target.value)
    }

    const [text,setText]=useState("")
    
    return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myText" className="form-label"></label> */}
                <textarea className="form-control" id="myText" rows="8" value={text} onChange={handleOnChange} ></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleSpeakClick}>Speak Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(/(\s+)/).filter((x) => x.trim().length>0).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <p>{text.replace(/\n$/gm, '').split(/\n/).length} Paragraphs</p>
            <p>{text.split(/[.?!]/g).filter(Boolean).length} Sentences</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
    )
}

