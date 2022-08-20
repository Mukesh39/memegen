import React, { useState, useEffect } from 'react';
import './App.css';
import Template from './components/Template.jsx';
import Meme from './components/Meme.jsx';

//useeffect manages sideefectsin fncs componenst 
//useEffect (callback =fxn to put sidefefect logic  , dependenies like state and props)

function App() {

  const [templates, setTemplates]  = useState([]);
  const [meme , setMeme] = useState(null);
  useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes") 
   .then((response) => response.json())
   .then((data) => {
    setTemplates(data.data.memes);
   });

  },[])

  return (
    <div className="App">
      <h2> Meme Generator </h2>
      {meme === null ? <Template templates={templates} setMeme={setMeme}/> : 
      <Meme meme={meme} setMeme= {setMeme}/> }  
    </div>
  );
}

export default App;






