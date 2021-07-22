import React,{useContext} from 'react'
import '../styles/search.css'
import {LyricsContext} from "../Helpers/context"

function Search() {
    //using context
    const{artist,setArtist,track,setTrack,setLyricsState,setSearchState}=useContext(LyricsContext)
    
    //function to validate user's search field
    const search=()=>
    {
        if(track==="" && artist==="")
         alert("Please enter Track and Artist name")
        else if(track==="")
         alert("Please enter Track name")
        else if(artist==="")
        alert("Please enter Artist name")
        else
        {
            //to show and search lyrics
            setSearchState(true)
            setLyricsState(true)
        }
    }
    return (
        <div className="search">
            <p>Find me Lyrics of </p>
            <div className="input-container">
                <input type="text" name="artist" placeholder="Enter Track name" value={track} onChange={e=>{setSearchState(false);setTrack(e.target.value);}}/>
                <span>By</span>
                <input type="text" name="track" placeholder="Enter Artist name" value={artist} onChange={e=>{setSearchState(false);setArtist(e.target.value)}}/>
            </div>
            <button className="search-btn" onClick={()=>search()}>Search</button>
        </div>
    )
}

export default Search
