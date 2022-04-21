import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TextAnimation = (props: any) => {
  return (
    <Typewriter
      words={['Salt', 'Diving From Above', 'Night', 'Water Heart']}
      loop
      cursor
      deleteSpeed={50}
      delaySpeed={100}
      typeSpeed={80}
      onType={(loop: number) => {
        console.log(loop)
      }}
    />
  )
}
      
export default TextAnimation
