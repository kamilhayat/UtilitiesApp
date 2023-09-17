import React from 'react'
import { useState } from 'react'
function TextForm(props) {


    const upperCase = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Text has been transfrom to uppercase', "success")
    }
    const lowerCase = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text has been transfrom to lowercase', "success")
    }
    const clearAll = () => {
        let newText = ("");
        setText(newText)
        props.showAlert('Text has been deleted', "success")

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.rate = 0.4;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 >{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ background: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="myBox" rows="12"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={upperCase}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={lowerCase}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={clearAll}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={speak}>speak</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>
            </div>
        </>
    )
}

export default TextForm