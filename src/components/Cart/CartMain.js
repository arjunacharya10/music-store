import React from 'react';
import CartItem from './CartItem';
import './CartItem.css';


const CartMain = ({cartList,removeFromCart,cartCost,onBuySongs})=>{

    const cartItems = cartList.map((track,index) =>{
        return (<CartItem track={track} key={track.id} index={index} removeFromCart={removeFromCart}/>);
    });

    if(cartList.length!=0)
    {
        return(
            <div  className="" style={{color:'white',overflowY:'clip'}}>
        <div style={{overflowY:'scroll',height:'750px',width:'50%'}} >{cartItems}</div>
        <div className="ui sticky">
            <h2>Total: ₹&nbsp;{cartCost}</h2>
            <a onClick={()=>onBuySongs()}  style={{marginTop:'20px',paddingLeft:'20px'}} className="ui inverted green button">Check Out</a> 
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
    </div>
        );
    }
    else{
        return(<h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>Cart Is Empty!</h2>);
    }
}

export default CartMain;