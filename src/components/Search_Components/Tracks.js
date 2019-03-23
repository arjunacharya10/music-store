import React from 'react';
import Track from './Track';

const Tracks = ({trackItems,updateCart,cart})=>{

    const songCards = trackItems.map(track=>{
        return (<Track key={track.id} track={track} updateCart={updateCart} cart={cart}/>);
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
        return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Results Found</h2>);
    }
}

export default Tracks;

//<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>