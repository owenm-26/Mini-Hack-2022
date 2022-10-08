
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://environment-news-live.p.rapidapi.com/newspapers',
  headers: {
    'X-RapidAPI-Key': 'd72340653cmsh492c7c86742913dp17b7d4jsn265838768460',
    'X-RapidAPI-Host': 'environment-news-live.p.rapidapi.com'
  }
};

function NewsList(props) {
  const [news, setNews] = useState();
  useEffect(() => {

    axios.request(options).then(function (response) {
      console.log(response.data);
      setNews(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    
    <div id="layout-content" className="App">
        <div className="panel-list">
          {news && news.map((item, i) => {
            if(item.newspaperID == props.filter) {
              return <a href={item.address} key={i}>{item.newspaperID}</a>
            }
          })}
        </div>
      </div>
      
  );
}

export default NewsList;
