import React,{useContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from '../Context';
import UI from './UI';
import Main from './Main';
import Detail from './Detail';

function Page() {
  const {darkmode,data,keys,flg} = useContext(Context);
  console.log(keys);
  return (
    <div className={darkmode ? 'darkmode' : 'lightmode'}>
      <BrowserRouter>
      <UI />
      <Routes>
        {
          !flg ?
          <Route path='/' element={<Main />} />
          :
          <Route path='/detail/:keys' element={<Detail data={data} keys={keys}/>} />
        }
          </Routes>
      <Detail />
      </BrowserRouter>
    </div>
  )
}

export default Page