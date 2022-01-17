import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }

    const handleDownClick = ()=>{
        let downText = text.toLowerCase();
        setText(downText);
    }

    const handleToClearText = ()=>{
        let newTxt = "";
        setText(newTxt);
    }

    const handleToReverseText = () =>{
        let reverseText = text.split("").reverse().join("");
        setText(reverseText);
    }

    const [text,setText] = useState("");
    // text = "new Text"  wrong way to change the state
    // setText("new Text") correct way to change the state
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-danger space" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-danger space" onClick={handleToClearText}>Clear Text</button>
                <button className="btn btn-success space" onClick={handleToReverseText}>Reverse Text</button>


        </div>
        <div className="container">
            <h2 className='my-2'>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3 className='my-2'>Preview your text here</h3>
            <p>{text}</p>
        </div>
    </>
    )
}
