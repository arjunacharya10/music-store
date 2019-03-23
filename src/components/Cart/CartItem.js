import React from 'react';
import img from '../sym6.png'
import './CartItem.css';

const CartItem =({track,index,removeFromCart})=>{
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

       
        <div className='flex-container pa3 ma2'>
            <div>
			    <a style={{color: 'white'}} href={track.external_urls.spotify}><img className="ui small image grow" src={track.album.images[1].url} alt="robots"/></a>
			</div>
            <div style={{padding:'20px'}} className="">
				<h2 style={{textAlign:'center'}}><a  style={{color:'white',cursor:'pointer'}}  className="ui grow">&nbsp;&nbsp;&nbsp; </a>{track.name.length>20?track.name.slice(0,17)+'...':track.name} </h2>
				<p style={{textAlign:'center'}}>{artList.length>20?artList.slice(0,17)+'...':artList}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:'20px',color:'#F0E68C'}}>Cost:₹ {track.cost}</span></p>
                <p onClick={()=>removeFromCart(index)}  style={{color:'grey',textAlign:'center',cursor:'pointer'}}>Remove   X</p>
            </div>
		</div>
    );
}

export default CartItem;

// bw2 shadow-5 dib br3 
//pa3 ma2
//dib br3