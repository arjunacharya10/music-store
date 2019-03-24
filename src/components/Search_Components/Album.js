import React from 'react';
import img from '../sym6.png'
import blank from './blank1.png';

const Album =({album,onRouteChange})=>{
    
    var artList="";
    album.artists.forEach(artist=>{
        artList+=artist.name+", ";
    });

    var albumImage = album.images.length?album.images[1].url:blank;
    
    if(album)
    {
            return(
            <a onClick={()=>onRouteChange(album.id,'tracks',albumImage,album.name,artList)} style={{color: 'white'}}>
                <div className='tc  dib br3 pa3 ma2 grow'>
                <img src={albumImage}  alt="robots"/>
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