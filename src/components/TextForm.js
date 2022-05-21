import React, {useState} from 'react'


export default function TextForm(props) {
    const [myStyle,setStyle]=useState({
        color:'black',
        backgroundColor:'white'

    });
    const [styleBtn,setStyleBtn]=useState('dark');

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
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText ="" ;
        setText(newText)
    }
    const handleDarkClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        if(myStyle.color==='black'){
            setStyle({
                color:'white',
                backgroundColor:'black'
            });
            setStyleBtn("light");
        }
        else{
            setStyle({
                color:'black',
                backgroundColor:'white'
            });
            setStyleBtn("dark");
        }
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    var words=(text.split(" ").length===1 && text.length===0)?0:text.split(" ").length;
    return (
        <>

        <div className='container' > 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"  style={myStyle}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={handleDarkClick}>Enable {styleBtn} mode </button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-3">Speak</button>
        </div>
        <div className="container my-3" >
        <h1>Summary</h1>
        <p>{text.length} characters and {words} words</p>
        <p>{words*0.008} minutes will needed to read</p>
        </div>
        
        </>
    )
}
