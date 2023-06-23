import React,{useContext} from 'react'
import { Context } from '../Context';
import '../CSS/search.css'
function Search() {
  const {keyword,handleKeywordSetting,handleCountrySearch} = useContext(Context);
  console.log(keyword);
  return (
    <div className='searchBar'>
      <form onSubmit={handleCountrySearch}>
        <input type='search' placeholder='search' value={keyword} onChange={handleKeywordSetting} />
        <button className='btnS' type='submit'>search</button>
      </form>
    </div>
  )
}

export default Search