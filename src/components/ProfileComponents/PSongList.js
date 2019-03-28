import React from 'react';
import img from '../sym6.png';

const PSongList =({track,setSongUrl,addSongToPlaylist})=>{
    
    var artList="";
    
    track.artistNames.forEach(artist => {
        artList+=artist+", ";
    });


    var trackName=track.trackName.length>20?track.trackName.slice(0,17)+'...':track.trackName;
    var trackImage = track.image;
    var artistNames = artList;

    return(

       
            <div className='tc  dib br3 pa3 ma2' style={{marginTop:'50px'}}>
			 <a style={{color: 'white',cursor:'pointer'}} onClick={()=>{addSongToPlaylist(track.id)}}><img className="ui circular medium image grow" src={trackImage} alt="robots"/></a>
			<div>
				<h2>{trackName} </h2>
				<p>{artistNames}&nbsp;&nbsp;&nbsp;&nbsp;</p>
			</div>
		</div>
    );
}

export default PSongList;

// bw2 shadow-5 dib br3 