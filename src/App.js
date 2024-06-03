import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.put('https://reqres.in/api/users/2',
    {
      "name": "Arturo",
      "job": "Scort"
  }
    )
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
  })
  return (
    <div className="App">
      
        
    </div>
  );
}

export default App;
