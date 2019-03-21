import React from 'react';
import img from '../sym6.png'
import blank from './blank1.png';

const Artist =({artist})=>{
    console.log(artist)
    if(artist)
    {
            return(
            <a style={{color: 'white'}} href={artist.external_urls.spotify}>
                <div className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={artist.images.length?artist.images[1].url:blank}  alt="robots"/>
                <div>
                    <h2>{artist.name.length>20?artist.name.slice(0,17)+'...':artist.name}</h2>
                    <p>Followers: {artist.followers.total}</p>
                </div>
            </div>
            </a>
        );
    }
    else{
        return(<div></div>);
    }
}

export default Artist;