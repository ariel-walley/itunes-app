import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header.js'

function App() {
  const [artist, setArtist] = useState(''); 

  useEffect(() => {  
    axios.get('http://localhost:4000/')
    .then((res) => {
      console.log(res.data.results);
      if (res.data.results[0].wrapperType === 'artist') {
        setArtist(res.data.results[0].artistName);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div>
      <Header artistName={artist}/>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default App;
