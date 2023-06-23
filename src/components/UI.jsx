import React,{useContext} from 'react'
import { Context } from '../Context';
import '../CSS/ui.css'

function UI() {
  
  const {handleDarkmode,darkmode} = useContext(Context);
  return (
    <div className={darkmode ? 'darkmode' : 'lightmode'}>
      <div className='ui'>
        <span>Where in the world?</span>
        <button onClick={handleDarkmode}>Dark Mode</button>
      </div>
    </div>
  )
}

export default UI