import React from 'react';
import './TrackList.css';
import blank from './blank.png';
import songImg from './song2.png';


const TrackList = ({image,song,updateCart,cart,purchasedSongs,setSongUrl})=>{

    var artists="";
    song.artists.forEach(artist=>{
        artists+=artist.name+', ';
    });

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }

      var inCart=false;
      var bought=false;

      cart.forEach(cartTrack=>{
          if(cartTrack.id===song.id){
              inCart=true;
          }
      });
      console.log(purchasedSongs);
      purchasedSongs.forEach(track=>{
          if(track.id===song.id){
              inCart=true;
              bought=true;
          }
      });

      var cost = parseInt(song.id,10) * 25 ;
      cost = cost%500;
        cost = cost<50?cost+50:cost;


    return(
        <div className="ui container">
        <div class="ui divider"></div>
            <div className="row">
                <div className="column">
                    <img style={{cursor:'pointer'}} onClick={()=>{if(bought)setSongUrl(song.id);else alert('Purchase the song to listen to it..')}} className="ui tiny circular image" src={songImg} width="64px" height="64px"></img>
                </div>
                <div className="double-column">
                    <h3>{song.name}</h3>
                    <p style={{color:'grey'}}>{artists}</p>
                </div>
                <div className="column" style={{paddingLeft:'20px'}}>
                    <h3>₹&nbsp;{cost}</h3>
                </div>
                <div className="column" style={{paddingLeft:'20px'}}>
                    <h2 style={{cursor:'pointer'}} onClick={()=>updateCart({
                        id: song.id,
                        trackName: song.name,
                        link: song.external_urls.spotify,
                        image: image,
                        artistNames: song.artists
                    },cost)}>{inCart?'✔':'+'}</h2>
                </div>
                <div className="column">
                    <p>{millisToMinutesAndSeconds(song.duration_ms)}</p>
                </div>
            </div>
        </div>
    );
}

export default TrackList;