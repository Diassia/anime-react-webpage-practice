import React from 'react'
import { useEffect, useState } from 'react'
import 'bootswatch/dist/vapor/bootstrap.min.css';
import './App.css';
import AddNewBtn from './AddNewBtn';
import Completed from './Completed';
import Header from './Header'
import Icon from './Icon';
import MostRecent from './MostRecent';
import NavBar from './NavBar'
import ReactiveImage from './ReactiveImage';
import Recommendation from './Recommendation';
import ToPlay from './ToPlay';
import Title from './Title';
import GameTItle from './GameTitle';
import handleDatabase from './handleDatabase';

function App() {
  const [data, setData] = useState({visualNovels: []});

  useEffect(() => {
    (async () => {
      const result = await handleDatabase();
      setData(result);
    })();
  }, [])

  return (
    <div className="App">
      <Header />
        <Title />
        <div classNane="container">
          { data.visualNovels.length > 0 ? 
          <ReactiveImage vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
          : <></>
          }
        </div>
      <br>
      </br>
      <NavBar />
        <ToPlay />
        <Completed />
        <AddNewBtn />
      <br>
      </br>
      <MostRecent />
        <Icon />
        <GameTItle />
      <br>
      </br>
      { data.visualNovels.length > 0 ? 
      <Recommendation vnData={data.visualNovels[Math.floor(Math.random() * data.visualNovels.length)]}/>
      : <></>
      }
      <p>
        Hello World
      </p>
    </div>
  );
}

// const {countries, SetCountries} = useState()
export default App;
