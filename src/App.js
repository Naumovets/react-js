import React from 'react';
import Header from './components/header'
import Img from './components/image'
import Jane from './img/JGNHl5PGBns.jpg'

const inputClick = () => console.log('click');
const mouseOver = () => console.log('mouseOver')


function App(){
  return (
    <div>
        <Header title="Заголовок блеять"/>
        <h1>Hello world!</h1>
        <input type="text" onClick={inputClick} onMouseEnter={mouseOver}/>
        <Img image={Jane}/>
    </div>
  )
}

export default App;