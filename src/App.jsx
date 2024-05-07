import './App.css'
import { useState , useEffect } from 'react';

function App() {

  const[count,setCount]=useState(10);

useEffect(()=>{

  const handleScroll=()=>{
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
      setCount(c=>c+10);
    }
  };
  window.addEventListener("scroll",handleScroll);

  return ()=>{
    window.removeEventListener("scroll",handleScroll);
  };

},[]);

const components=[];
for(let i=0;i<count;i++){
  components.push(
    <div key={i} id="divs">
      {i+1}
    </div>
  );
}

  return (
    <div>
      <h1>...Infinite Scrolling...</h1>
       {components} 
    </div>
  )

}

export default App
