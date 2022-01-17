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
    const [text,setText] = useState("Enter text here...");
    // text = "new Text"  wrong way to change the state
    // setText("new Text") correct way to change the state
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

                <button className="btn btn-danger space" onClick={handleDownClick}>Convert to Lowercase</button>


        </div>
    )
}
