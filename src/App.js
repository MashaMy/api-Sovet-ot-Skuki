import { useState } from 'react';
import { useEffect } from 'react';
import video from "./naush.mp4";
import './App.css';


function App() {

const [advice, setAdvice ] = useState("");


useEffect(() => {
  getAdvice();
  }, [])
  
  const getAdvice = async () => {
  const response = await fetch(`https://www.boredapi.com/api/activity/`);
  const data = await response.json();
  console.log(data.activity);
  setAdvice(data.activity)
  }

return(
    <div className="App">
  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
<h1>Тебе скучно?</h1>
  </div>

  <div >
    <div className='container'>
     <button onClick={getAdvice}>Узнай, чем себя развлечь!</button>
     </div>
</div>


<div >
    <div className='container'>
    <h2>{advice}</h2>
    </div>
</div>

  </div>
);

}

export default App;
