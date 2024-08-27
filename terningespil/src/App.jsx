import React, { useState } from 'react';
import Button from './components/Buttons/Higher';
import style from './components/Buttons/Higher.module.scss';
import './App.scss'

function App() {
  const handleClick = () => {   
};
  return (
    <>
    <div className='AllButtons'>
         <Button style = {style.Higher} higher={'Name'} onClick={handleClick}/>
    </div>
    </>
  )
}
export default App
