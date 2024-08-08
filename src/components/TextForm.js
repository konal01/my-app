import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase was clicked");
    setText("you have clicked on handleUpClick")
  }
  const handleOnchange =()=>{
    console.log("On change");
  }


  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div>
      
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8">
          </textarea>
        </div> 
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
    </>
  )
}
