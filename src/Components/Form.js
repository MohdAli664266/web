import React, {useState} from 'react'

function Form(props){
    const [text, setText] = useState('')
    let flag = false;
    let words = text;
    const onChangeFunc = (event)=>{
        setText(event.target.value);
        words = text;
        if(words==='')
        {
            flag = true;
        }else 
            flag = false;
    }
    let prev= text;
    const onConvert = ()=>{
        const up = text;
        setText(up.toUpperCase());
        let b = document.querySelector(".cl");
        let prev = document.querySelector("#prev");
        b.style.color = "rgb(0, 255, 0)";
        prev.style.color = "#0b726e";
    }
    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control cl" onChange={onChangeFunc} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-danger my-2" onClick={onConvert}>Convert to upper</button>
                <p><b>{words===flag?text.split(' ').length-1 : text.split(' ').length}</b> Words and <b>{text.length}</b> Characters</p>
            </div>
            <div className="container">
                <h1>Prevew</h1>
                <p id='prev'>{prev}</p>
            </div>
        </>
    );
}

export default Form;