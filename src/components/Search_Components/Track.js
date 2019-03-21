import React from 'react';
import img from '../sym6.png'

const Track =({track})=>{
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

    return(

        <a style={{color: 'white'}} href={track.external_urls.spotify}>
            <div className='tc  dib br3 pa3 ma2'>
			<img className="ui circular medium image grow" src={track.album.images[1].url} alt="robots"/>
			<div>
				<h2>{track.name.length>20?track.name.slice(0,17)+'...':track.name}</h2>
				<p>{artList.length>20?artList.slice(0,17)+'...':artList}</p>
			</div>
		</div>
        </a>
    );
}

export default Track;

// bw2 shadow-5 dib br3 