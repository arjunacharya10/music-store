import React from 'react';
import Artist from './Artist';

const Artists = ({artists})=>{
    const artistCards = artists.map(artist=>{
        return(<Artist artist={artist}/>)
    })
    if(artists.length)
    {
        return(
            <div className="" style={{color:'white'}}>
            {artistCards}
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
        );
    }
    else{
        return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Results Found</h2>);
    }
}

export default Artists;