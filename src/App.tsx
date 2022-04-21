import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './Icon'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function App() {
  // TODO: TITLE HARDCODING. must separate.
  // WHO IN THE WORLD WROTE THIS FUXX'N CRAP CODE?
  const titles = [
    'Salt', 
    'Diving From Above',
    'Night',
    'Water Heart',
    'Rhodonite',
    'T1me-AxIs',
    'Brown.',
    'Kowareteiku',
    'Running away.',
    'Dreaming Deeper',
    'Stars',
    'Iced Glass',
    'Rain',
    'Snowy',
    'Chrysoberyl',
    'Non-titled.',
    '速けりゃいいってもんじゃない。',
    'Sunset in the city',
    '4Me4U',
    'Redo ==>>>*',
    'Inside Material',
    'For Something',
    'Progress Problem',
    'Undo ^<<===',
    'Gqlqxsiiiii',
    'The Insane Piano',
    '無秩序極彩色',
    'Over Sleeping',
    'Loops',
    'Blue Dimension',
    'Sei-Jaku',
    'U, Ur, Urs.',
    'Q Vu',
    'We lost our █████',
    'NO COLORS AROUND HER WORLD',
    'Cataclysm',
    'Emechi - Alter of heaven [ Ezame Remix ]',
    'System Over Heat',
    'Harukaze',
    '1, 2, 3, 4, 5, 6, 7.',
    'Pixel Driver',
    'Data Town',
    'Going home with my bicycle',
    'Whale Shark',
    'Destructivity'
  ]

  const { text } = useTypewriter({
    words: titles,
    typeSpeed: 100,
    deleteSpeed: 75,
    loop: 0,
  })

  return (
    <div className='App'>
      <Icon />
      <span><b>&gt;_</b> {text}</span>
      <Cursor />
    </div>
  )
}

export default App;
