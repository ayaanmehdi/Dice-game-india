import React from 'react'

const Button = (props) => {


    
  return (
    <div>
        <h1 className='w-[300px] m-9'>You can play this game with your friend and you can show your score to others to impress them.</h1>
        <button onClick={props.Playgame} className='border-black border-2 w-[200px] ml-9 py-3 rounded transition text-white bg-black hover:text-black hover:bg-white'>Play now</button>
    </div>
  )
}

export default Button