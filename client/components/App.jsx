import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [ip, setIP] = useState('');
  const React = require('react');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
}

useEffect( () => {
  //passing getData method to the lifecycle method
  getData()

}, [])

    return (
      <>
      <div className='App'>
          <h1>Welcome</h1>
          <h2>Your IP Address is</h2>
          <h4>{ ip }</h4>
          <h1>The Date is {new Date().toLocaleString()}</h1>
        </div>
      </>
    )
  }


export default App;