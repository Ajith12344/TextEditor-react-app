
import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpclick =()=>{
        console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleLoclick =()=>{
        console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);

    }
    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleClearclick =()=>{
      let newText=' ';
        setText(newText);
  }
  const handleCopyclick =()=>{
    console.log("i am a copy");
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
}


      const [text,setText]=useState('enter text here 2');


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
   <h1>{props.text}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpclick} >Convert To UpperCase</button>
<button className='btn btn-success mx-1' onClick={handleLoclick} >Convert To LowerCase</button>
<button className='btn btn-success mx-1' onClick={handleClearclick} >Clear</button>
<button className='btn btn-success mx-1' onClick={handleCopyclick} >Copy</button>
    </div>
 <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length}words and {text.length}characters</p>
    </div>   
    </>
  )
}
