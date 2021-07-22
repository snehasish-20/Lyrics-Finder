import React,{useState,useContext} from 'react'
import axios from 'axios'
import {LyricsContext} from "../Helpers/context"
import '../styles/lyrics.css'
function Lyrics() {
    //creationg a state to store the lyrics of a song
    const[lyrics,setLyrics]=useState("Loading...")

    //to use contesxt
    const{artist,track,searchState,setLyricsState}=useContext(LyricsContext)

        //function to frtch data from API
        function getlyrics()
        {
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${track}&q_artist=${artist}&apikey=1538e2542ebac4878de127b5193d9854`).then(res => {
           setLyrics(res.data.message.body.lyrics.lyrics_body);
        })
        .catch(err => {console.log(err);setLyrics("An ERROR occured please try again")})
        console.log("done")
        }
        //to check if user has searched for a new lyrics
        if(searchState===true)
        {
           getlyrics();
        }
    return (
        <div className="lyrics">
            <div className="titles">
                <span>Song Name: {track}<br/> Artist Name: {artist}<br/></span>
            </div>
            <div className="lyrics-container">
                <p className="lyrics-txt">{lyrics}</p>
            </div> 
            <button onClick={()=>setLyricsState(false)}className="close-btn">CLOSE &#10006;</button>
        </div>
    )
}

export default Lyrics
