import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode ==='dark'){
        setMode('light');
		document.body.style.backgroundColor='white'
        document.title='Text-convertor-light-Mode'

        }
        else{
        setMode('dark');
		document.body.style.backgroundColor='black'
		document.title='Text-convertor-Dark-Mode'
        }
    }


return (
	<>

	<Navbar tittle="Text Editor" mode={mode} toggleMode={toggleMode}/> 
	<div className='container my-3'>
	    
	<BrowserRouter>
      <Routes>
        <Route path="/" element={ <TextForm  text="Enter the text to analyze" mode={mode}/>}>
        </Route>
		<Route>
		<Route path="/about" element={<About/>} />
		</Route>
      </Routes>
    </BrowserRouter>
		
       
         
	</div>
	
	
	</>
	// usage of props
	
);
}

export default App;
