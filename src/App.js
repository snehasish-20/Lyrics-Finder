import React,{useState} from 'react'
import './App.css';
import Lyrics from './components/lyrics';
import Navbar from './components/navbar';
import Search from './components/search';
import {LyricsContext} from "./Helpers/context"


function App() {
  //state to store artist searched
  const[artist,setArtist]=useState("")
  //state to store track searched
  const[track,setTrack]=useState("")
  //state to store whether we want to show lyrics
  const[lyricsState,setLyricsState]=useState(false )
  //state to store whether user has searched for a new lyrics
  const[searchState,setSearchState]=useState(false)
  return (
    <div>
      <LyricsContext.Provider value={{artist,setArtist,track,setTrack,lyricsState,setLyricsState,searchState,setSearchState}}>
        <Navbar/>
        <Search/>
        {lyricsState && <Lyrics/>}
      </LyricsContext.Provider>
    </div>
    
  );
}

export default App;
