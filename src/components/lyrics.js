import React,{useState} from 'react'
import axios from 'axios'

function Lyrics() {
    const[artist,setArtist]=useState("justin beiber")
    const[track,setTrack]=useState("baby")

    const apiKey="1538e2542ebac4878de127b5193d9854"
    // const CORSurl="https://cors-anywhere.herokuapp.com/"
    const url=`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${track}&q_artist=${artist}&apikey=${apiKey}`
    
    const findLyrics=async()=>{
        const response=await axios.get(url)
        // const response=await axios.get(url,{headers:{'Access-Control-Allow-Origin' : '*',crossorigin:true,'Access-Control-Allow-Credentials':true}})
        console.log(response)
    }
    
    findLyrics()
    return (
        <div>
            Lyrics finder App
        </div>
    )
}

export default Lyrics