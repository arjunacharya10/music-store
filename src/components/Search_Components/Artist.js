import React from 'react';
import img from '../sym6.png'
import blank from './blank1.png';
import ver from './ver.png';

const Artist =({artist,onRouteChange})=>{
    console.log(artist)

    function kmFormatter(num) {
        return num >=1000 ?num>=1000000?(num/1000000).toFixed(1) + 'M': (num/1000).toFixed(1) + 'K' : num
    }

    var artistImage = artist.images.length?artist.images[1].url:blank
    var artistFollowers = kmFormatter(artist.followers.total);
    var artistName=artist.name.length>20?artist.name.slice(0,17)+'...':artist.name;

    if(artist)
    {
            return(
            <a style={{color: 'white'}} onClick={()=>onRouteChange('info',artist.id,artistName,artistImage,artistFollowers)}>
                <div className='tc  dib br3 pa3 ma2 grow'>
                <img width="300px" height="300px"  src={artistImage}  alt="robots"/>
                <div>
                    <h2>{artistName}</h2>
                    <p style={{color:'grey'}}>Followers: {artistFollowers}</p>
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