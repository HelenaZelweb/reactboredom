import { useEffect,useState} from 'react';
import './App.css';
import image from './5.png';
 
function App() {
const [ boredom , setBoredom ]  = useState('');
useEffect (()=>{
getBoredom ();
},[])
const getBoredom = async () => {
  const response = await fetch (`https://www.boredapi.com/api/activity? `);
  const data = await response.json();
  console.log(data);
  setBoredom(data.activity);
}
  return (
    <div className ="container">
    <div className ='box'>
      <img  className='picture' src={image} width="300px" alt="border"/>
      <p>Are you bored?</p> 
    </div>
    <div id="cssload-loader">
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
	<div className="cssload-dot"></div>
  </div>
       
       <div className='txt'>
       <p className='boredom'>{boredom}</p>
       <button className='btn' onClick={getBoredom}>Click here</button>
       </div>
       </div>
    
  );
}

export default App;
