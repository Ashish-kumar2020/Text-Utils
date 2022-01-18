import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length>0){
             props.showAlert("Converted to UpperCase","success");
        } else{
            props.showAlert("Nothing to make in UpperCase ","danger");
        }
    }
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }

    const handleDownClick = ()=>{
        let downText = text.toLowerCase();
        setText(downText);
        if(text.length>0){
            props.showAlert("Converted to LowerCase","success");
        } else{
            props.showAlert("Nothing to make in LowerCase ","danger");
        }
    }

    const handleToClearText = ()=>{
        let newTxt = "";
        setText(newTxt);
        if(text.length>0){
            props.showAlert("Text cleared","success");
        } else{
            props.showAlert("Nothing to clear","danger");
        }
    }


    const handleToReverseText = () =>{
        let reverseText = text.split("").reverse().join("");
        setText(reverseText);
        if(text.length>0){
            props.showAlert("Text reversed","success");
        } else{
            props.showAlert("Nothing to reverse","danger");
        }
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        if(text.length>0){
            props.showAlert("extra spaces removed","success");
        } else{
            props.showAlert("Nothing to remove","danger");
        }

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
        
    }

    const [text,setText] = useState("");
    // text = "new Text"  wrong way to change the state
    // setText("new Text") correct way to change the state
    return (
        <>
        <div className='container'>
            <div className="mb-3" style = {{color: props.mode === 'dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey': 'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-danger space" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary space" onClick={handleToClearText}>Clear Text</button>
                <button className="btn btn-danger space" onClick={handleToReverseText}>Reverse Text</button>
                <button className="btn btn-primary space" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger space" onClick={handleExtraSpaces}>Remove Spaces</button>

        </div>
        <div className="container" style = {{color:props.mode === 'dark'?'white':'#042743'}}>
            <h2 className='my-2' >Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3 className='my-2'>Preview your text here</h3>
            <p>{text.length>0 ? text: "Enter something to preview"}</p>
        </div>
    </>
    )
}
