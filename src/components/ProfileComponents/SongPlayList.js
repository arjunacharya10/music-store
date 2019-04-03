import React from 'react';
import '../Search_Components/TrackList.css';


const SongPlayList = ({song,setSongUrl,removeSongFromPlaylist,songListChanged})=>{

    console.log(song);
    var artists="";
    song.artistNames.forEach(artist=>{
        artists+=artist+', ';
    });

    var inCart=false;

    return(
        <div className="ui container">
        <div class="ui divider"></div>
            <div className="row">
                <div className="column">
                    <img style={{cursor:'pointer'}} onClick={()=>{setSongUrl(song.id)}} className="ui tiny circular image" src={song.image} width="64px" height="64px"></img>
                </div>
                <div className="double-column">
                    <h3 style={{color:'white'}}>{inCart?'✔':'+'}&nbsp;&nbsp;&nbsp; {song.trackName}</h3>
                    <p style={{color:'grey'}}>{artists}</p>
                </div>
                <div className="column" style={{paddingLeft:'20px'}}>
                    <h2 onClick={()=>{removeSongFromPlaylist(song.id);songListChanged()}}  style={{cursor:'pointer',color:'white'}}>x</h2>
                </div>
            </div>
        </div>
    );
}

export default SongPlayList;