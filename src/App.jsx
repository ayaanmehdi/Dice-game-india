import React, { useState } from 'react'
import Playpage from './components/Playpage'
import Startgame from './components/Startgame'
const App = () => {

  // document.addEventListener("contextmenu",(e)=>{
 
  //   e.preventDefault()
  //   alert("inspect is not allowed h")
  //   })

    const [isstart, setisstart] = useState(false)
    const Playgame = ()=>{
        setisstart(true)
       }
    
    if(isstart){
         return<Startgame/>
    }else{
        return<Playpage Playgame={Playgame}></Playpage> 
        
    }
 
    
   
  return (
    
    <>
    </>
  )
}

export default App