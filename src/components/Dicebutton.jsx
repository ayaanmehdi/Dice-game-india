import React from 'react'

const Dicebutton = () => {
    let dices = ["1","2","3","4","5","6"];
 
const bgcolor = ()=>{
         let button = document.getElementById("singdice")
         button.style.color="red";
}
  
  return (
    <>
    <div className='w-10 border-black border-2'> 
        {dices.map((singdice)=>(
            <button key={singdice} id={"singdice"}  className={` w-10 h-10 border-black border-2 text-black`} onClick={bgcolor}>{singdice}</button>
        ))}
    </div>
    </>
  )
}

export default Dicebutton