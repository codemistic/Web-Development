import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const eraseAll=()=>{
        let newText='';
        setText(newText);
    }
    const handleChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }
    const [text, setText] = useState('');
    // text="new text"; => This is wrong way to define state
    // setText("new text"); =>This is the right way to define the state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'DarkSlateGrey', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleChange} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleloClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={eraseAll}>Clear</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy</button>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>It will take <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minute's to read this paragraph.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
