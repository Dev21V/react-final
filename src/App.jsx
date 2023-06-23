import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './CSS/App.css'
import Page from './components/Page';
import { Context } from './Context';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [data, setData] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [flg, setFlg] = useState(false);
  let API_URL = `https://restcountries.com/v3.1/all`;
  const handleDarkmode = () =>{
    setDarkmode(!darkmode);
    console.log(darkmode);
  }
  const fetData = () => {
    if(keyword == null || keyword == ''){
      API_URL = `https://restcountries.com/v3.1/all`;
      
    }
    // else if(keys != '' || keys != null){
    //   console.log('zz');
    //   API_URL = `https://restcountries.com/v3.1/name/${keys}`
    // }
    else{
      API_URL = `https://restcountries.com/v3.1/name/${keyword}`
    }
    
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setData(data);
      })
  }
  useEffect(() => {
    fetData();
    
  }, []);  
  const handleKeywordSetting = (e) =>{
    setKeyword(e.target.value);
  }
  const handleCountrySearch = (e) =>{
    if(e!=null){
    e.preventDefault();
    }
    fetData();
    setKeyword('');
  }
  const handleClickItem = (myItem) =>{
    setFlg(!flg);
    console.log(myItem);
    setKeys(myItem);
    fetData();
    console.log(keyword ,' , ',keys);
  }
  const handleClickItem2 = () =>{
    setFlg(!flg);
    setKeyword('');
    setKeys('');
    console.log(keyword ,' , ',keys);
  }
  const [keys,setKeys] = useState('');
  function clicks (myItem){
    console.log(myItem);
    setKeys(myItem);
    if(keys != ''){
      handleClickItem(myItem);
    }
  }

  return (
    <>
      <Context.Provider value={{darkmode,setDarkmode,handleDarkmode,data,keyword,handleKeywordSetting,handleCountrySearch,flg,handleClickItem,handleClickItem2,keys,clicks}}>
          <Page />
      </Context.Provider>
    </>
  )
}

export default App
