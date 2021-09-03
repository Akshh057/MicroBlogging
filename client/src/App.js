import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    const callApi = async () => {
      const res = await axios.get('http://localhost:5000/api/getAllBlogs')
      console.log(res.data)

    }
    callApi()
  }, [])
  return (
    <>

    </>

  );
}

export default App;
