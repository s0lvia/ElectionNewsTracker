import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import loading from './assets/loader.gif'
import { AiOutlineSearch } from 'react-icons/ai'


function App() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true);
  const [filteredNews, setFilteredNews] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setNews(response.data);
      })
  }, [])

  const handleSearchInput = (searchValue:any) => {
    setSearchInput(searchValue.target.value)
    
  }

  const resetInputFiled = () => {
    setSearchInput('')
  }

  const searchNews = (event:any) => {
    event.preventDefault();
      let result = news.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredNews(result)
      resetInputFiled();
    }
  

  return (
    <div className="App">
      <div className='app-header'>
        <div className='search-container'>
           <AiOutlineSearch className='icon'/>
            <form className = "form" onSubmit={searchNews} >
              <input 
                type="text" 
                className='text-input' 
                placeholder='Search candidate...' 
                value={searchInput}
                onChange={handleSearchInput}
              />
              
                <button className='search-button' > Search</button>
            
            </form>
           
        </div>
      </div>
      
        {filteredNews.map((item:any) => {
            return ( 
              <div className='card-container'>
                <div className='card1'>
                  <h1 className = "head">{item.name}
                        <span className = "span">
                          {item.title}
                        </span>
                    </h1>
                </div>
              
                <div className='card2'>
                <h1 className = "head">{item.name}
                        <span className = "span">
                          {item.title}
                        </span>
                    </h1>
                </div>
      
                <div className='card3'>
                <h1 className = "head">{item.name}
                        <span className = "span">
                          {item.title}
                        </span>
                    </h1>
                </div>
              </div>
            )
          }) 
        }
        
              
    </div>
  );
}

export default App;
