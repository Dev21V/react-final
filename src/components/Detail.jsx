import React from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';
import { useContext } from 'react';

export default function Detail({keys}) {
  const params = useParams();
  const {handleClickItem2,data} = useContext(Context);
  console.log(params);
  console.log(keys);
  console.log(data);
  return (
    <>
      <button onClick={handleClickItem2}>Back</button>
      <div>
        <p></p>
        <div>
          <div>
            <img />
          </div>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}