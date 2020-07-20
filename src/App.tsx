import React, {useState} from 'react';
import './App.css';
import './Components/SearchBarComponent/SearchBar';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import Banner from './Components/BannerComponent/Banner';
import MediaGrid from './Components/MediaGridComponent/MediaGrid';

function App() {

  const [UserQuery, setUserQuery] = useState<string>("Harry");
  const handleUserQuery = (term: string) => {
    setUserQuery(term);
  }


  return (
    <div className="App">
      <Banner></Banner>
      <SearchBar SetUserQuery={(a: string) => handleUserQuery(a)}></SearchBar>
      <MediaGrid SearchQuery={UserQuery}/>
    </div>
  );
}

export default App;
