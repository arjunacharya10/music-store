import React from 'react';

const FollowCard = ({user,updateFollowingSongs})=>{
    return(
        <div className='tc dib pa3 ma2'>
			 <a style={{color: 'white',cursor:'pointer'}} ><img onClick={()=>{updateFollowingSongs(user.ID)}} className="ui circular small image grow" src={user.AVATAR} alt="robots"/></a>
			<div>
				<h2 style={{color:'aliceblue',fontFamily: "Caveat"}}>{user.NAME} </h2>
			</div>
		</div>
    )
}

export default FollowCard;

//dib br3    pa3 ma2