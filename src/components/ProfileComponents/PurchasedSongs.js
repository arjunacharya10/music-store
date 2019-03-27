import React from 'react';
import TrackItem from './TrackItems';

const PurchasedSongs = ({trackItems,setSongUrl})=>{

    const songCards = trackItems.map(track=>{
        return (<TrackItem key={track.id} track={track} setSongUrl={setSongUrl}/>);
    })

    if(trackItems.length)
    {
        return(
            <div style={{overflowX:'scroll',overflowY: 'scroll',height:'700px',width:'500px'}} className="ui" style={{color:'white'}}>
            <h2>Purchased Songs:</h2>
            {songCards}
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
        );
    }
    else{
        return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Songs Purchased</h2>);
    }
}

export default PurchasedSongs;