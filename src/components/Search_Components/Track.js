import React from 'react';
import img from '../sym6.png'

const Track =({track,updateCart,cart})=>{
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

    var cost = parseInt(track.id,10) * 25 ;

    cost = cost%500;
    cost = cost<50?cost+50:cost;

    return(

       
            <div className='tc  dib br3 pa3 ma2'>
			 <a style={{color: 'white'}} href={track.external_urls.spotify}><img className="ui circular medium image grow" src={track.album.images[1].url} alt="robots"/></a>
			<div>
				<h2><a onClick={()=>{if(!inCart){updateCart(track,cost);}}} style={{color:'white',cursor:'pointer'}}  className="ui grow">{inCart?'✔':'+'}&nbsp;&nbsp;&nbsp; </a>{track.name.length>20?track.name.slice(0,17)+'...':track.name} </h2>
				<p>{artList.length>20?artList.slice(0,17)+'...':artList}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:'50sp'}}>Cost:₹ {cost<0?cost+50:cost}</span></p>
			</div>
		</div>
    );
}

export default Track;

// bw2 shadow-5 dib br3 