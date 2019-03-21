import React from 'react';
import img from '../sym6.png'
import blank from './blank1.png';

const Album =({album})=>{
    
    var artList="";
    album.artists.forEach(artist=>{
        artList+=artist.name+", ";
    });

    
    if(album)
    {
            return(
            <a style={{color: 'white'}} href={album.external_urls.spotify}>
                <div className='tc  dib br3 pa3 ma2 grow'>
                <img src={album.images.length?album.images[1].url:blank}  alt="robots"/>
                <div>
                    <h2>{album.name.length>20?album.name.slice(0,17)+'...':album.name}</h2>
                    <p>{artList.length>20?artList.slice(0,17)+'...':artList}</p>
                </div>
            </div>
            </a>
        );
    }
    else{
        return(<div><h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>Your Search Result will Appear Here..</h2></div>);
    }
}

export default Album;