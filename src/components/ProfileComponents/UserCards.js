import React from 'react';

const UserCards =({user,following,onFollow,onUnFollow})=>{

    function kmFormatter(num) {
        return num >=1000 ?num>=1000000?(num/1000000).toFixed(1) + 'M': (num/1000).toFixed(1) + 'K' : num
    }

    var isFollowing=false;
    following.forEach(userid=>{
        if(user.ID===userid){
            isFollowing=true;
        }
    })

    var userName=user.NAME.length>20?user.NAME.slice(0,17)+'...':user.NAME;

    if(user)
    {
            return(
            <a style={{color: 'white'}}>
                <div className='tc  dib br3 pa3 ma2'>
                <div className="grow">
                    <img width="300px" height="300px"  src={user.AVATAR}  alt="robots"/>
                </div>
                <div>
                    <h2>{userName}</h2>
                </div>
                <p style={{color:'grey'}}>{user.EMAIL}</p>
                {isFollowing?
                    <button onClick={()=>{onUnFollow(user.ID)}} class="ui inverted red button">
                        Unfollow
                    </button>:
                    <button onClick={()=>{onFollow(user.ID)}} class="ui inverted blue button">
                        Follow
                    </button>
                }
                </div>
            </a>
        );
    }
    else{
        return(<div></div>);
    }
}

export default UserCards;