import React from 'react';
import PSongList from './PSongList';

const PSongData = ({trackItems,setSongUrl,addSongToPlaylist})=>{

    const songCards = trackItems.map(track=>{
        return (<PSongList addSongToPlaylist={addSongToPlaylist} key={track.id} track={track} setSongUrl={setSongUrl}/>);
    })

    if(trackItems.length)
    {
        return(
            <div style={{overflowX:'scroll',overflowY: 'scroll',height:'700px',width:'500px'}} className="ui" style={{color:'white'}}>
            
            {songCards}
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
        );
    }
    else{
        return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Songs Purchased</h2>);
    }
}

export default PSongData;