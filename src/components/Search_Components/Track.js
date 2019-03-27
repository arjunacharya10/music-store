import React from 'react';
import img from '../sym6.png';

const Track =({track,updateCart,cart,purchasedSongs,setSongUrl})=>{
    /*return(
        <div className="ui">
                <div style={{display: 'inline'}} className="ui item">
                <div class="ui divider"></div>
                    <img class="ui middle aligned tiny image" src={img}/>
                    <span>
                        <span>&nbsp;&nbsp;&nbsp;Title</span><br/>
                        <span>Artist Name</span>
                    </span>
                </div>
        </div>
    );*/
    var artList="";
    
    track.artists.forEach(artist => {
        artList+=artist.name+", ";
    });

    var inCart=false;

    cart.forEach(cartTrack=>{
        if(cartTrack.id===track.id){
            inCart=true;
        }
    });

    purchasedSongs.forEach(tracks=>{
        if(tracks.id===track.id){
            inCart=true;
        }
    });

    console.log(track);

    var cost = parseInt(track.id,10) * 25 ;
    var trackName=track.name.length>20?track.name.slice(0,17)+'...':track.name;
    var trackLink = track.external_urls.spotify;
    var trackImage = track.album.images[1].url;
    var artistNames = artList.length>20?artList.slice(0,17)+'...':artList;
    
    cost = cost%500;
    cost = cost<50?cost+50:cost;

    return(

       
            <div className='tc  dib br3 pa3 ma2'>
			 <a style={{color: 'white'}} onClick={()=>{setSongUrl(track.id)}}><img className="ui circular medium image grow" src={trackImage} alt="robots"/></a>
			<div>
				<h2><a onClick={()=>{if(!inCart){updateCart(
                    {
                        id: track.id,
                        trackName: track.name,
                        link: trackLink,
                        image: trackImage,
                        artistNames: track.artists
                },
                cost
                );}}} 
                style={{color:'white',cursor:'pointer'}}  className="ui grow">{inCart?'✔':'+'}&nbsp;&nbsp;&nbsp; </a>{trackName} </h2>
				<p>{artistNames}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:'50sp'}}>Cost:₹ {cost}</span></p>
			</div>
		</div>
    );
}

export default Track;

// bw2 shadow-5 dib br3 