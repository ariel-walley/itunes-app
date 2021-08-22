import logo from './logo.svg';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {  
    axios.get('http://localhost:4000/')
    .then((res) => {
      console.log(res.data.results);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default App;
