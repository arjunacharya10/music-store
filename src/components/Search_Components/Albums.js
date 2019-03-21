import React from 'react';
import Album from './Album';

const Albums = ({albums})=>{
    const albumCards = albums.map(album=>{
        return(<Album album={album}/>);
    })
    
    if(albums.length)
    {
        return(
            <div className="" style={{color:'white'}}>
            {albumCards}
        </div>
        );
    }
    else{
        return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Results Found</h2>);
    }
}

export default Albums;