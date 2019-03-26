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
    var names="";
    for(var i=0;i<track.artistNames.length;i++){
        if(i==track.artistNames.length-1)
            names+=track.artistNames[i].name;
        else{
            names+=track.artistNames[i].name+", ";
        }
    }

    names = names.length>20? names.slice(0,17)+'...':names;



    return(

       
        <div className='flex-container pa3 ma2'>
            <div>
			    <a style={{color: 'white'}} href={track.link}><img className="ui small image grow" src={track.image} alt="robots"/></a>
			</div>
            <div style={{padding:'20px'}} className="">
				<h2 style={{textAlign:'center'}}><a  style={{color:'white',cursor:'pointer'}}  className="ui grow">&nbsp;&nbsp;&nbsp; </a>{track.trackName} </h2>
				<p style={{textAlign:'center'}}>{names}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:'20px',color:'#F0E68C'}}>Cost:₹ {track.cost}</span></p>
                <p onClick={()=>removeFromCart(index)}  style={{color:'grey',textAlign:'center',cursor:'pointer'}}>Remove   X</p>
            </div>
		</div>
    );
}

export default CartItem;

// bw2 shadow-5 dib br3 
//pa3 ma2
//dib br3