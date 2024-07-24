import React from 'react'
import Image from './Image'
import Button from './Button'
const Frontpage = (props) => {
  const {Playgame} = props;
  return (
    <>
    <div className="container w-[100%] h-[100vh] flex items-center justify-center">
    <Image></Image>

    <Button Playgame={Playgame}></Button>
   </div>
   </>
  )
}

export default Frontpage