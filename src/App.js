
import './App.css';
import Row from './components/Row'
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';
import React from 'react';
import Footer from './components/Footer';

function App() {
  const [search,setSearch]=React.useState(null);

  const rec_data=(index)=>{
    setSearch(index);
  }
  if(!search){
  return (
    <div className="App">
      <Nav data={rec_data}/>
   
     <Banner />
     <Row title="Originals" fetchUrl={requests.fetchNetflix0riginals}
     isLarge/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     <Footer />
    </div>
  );
  }
  else{
    // console.log(`${requests.fetchSearch}${search}`);
    return (
      <div className="App">
        <Nav data={rec_data}/>
     
       <Banner />
       <Row title="Results" fetchUrl={`${requests.fetchSearch}${search}`}
       isLarge/>
      <Footer />
       </div>
       );
  }
}

export default App;
