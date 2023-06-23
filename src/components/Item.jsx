import React,{useContext} from 'react'
import { Context } from '../Context';
import '../CSS/item.css'
import { useState } from 'react';

function Item() {
  const {data,clicks} = useContext(Context);
  // console.log(data);
  return (
    <>
      <div className='items'>
        {
          data && data.map((_,i)=>{
            return(
              <div className='box' key={i} onClick={(e) =>clicks(data[i].name.common)} >
                <img src={data[i].flags.png} />
                <p className='name'>{data[i].name.common} {data[i].translations.kor.common}</p>
                <p><span>Population: </span>{data[i].population}</p>
                <p><span>Region: </span>{data[i].region}</p>
                <p><span>Capital: </span>{data[i].capital}</p>
              </div>
              )
            }
          )
        }
        
      </div>
    </>
  )
}

export default Item