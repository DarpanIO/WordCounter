import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>

        <div className='container'> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
        <h1>Summary</h1>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <p>{(text.split(" ").length)*0.008} minutes will needed to read</p>
        </div>
        
        </>
    )
}
