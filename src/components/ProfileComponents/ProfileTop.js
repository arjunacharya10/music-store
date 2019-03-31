import React from 'react';

const ProfileTop = (props)=>{
    return(
        /*<div className="ui container center">
            <h1 style={{marginTop: '20px',color: 'white'}}>Welcome {firebase.auth().currentUser?firebase.auth().currentUser.displayName:null}</h1>
        </div>*/
        <div className="ui container">
            <div style={{marginTop: '50px'}} class="ui container">
                <div className="ui grid">
                    <div className="ui row">
                        <div  className="four wide column">
                        <img class="ui small circular image" src={props.currentUser.avatar}/>
                        </div>
                        <div className="four wide column">
                            <div>
                                <h1 style={{textAlign: 'center',color: 'aliceblue'}}>Followers</h1>
                                <h3 style={{textAlign: 'center',color: 'aliceblue'}}>{props.followers}</h3>
                            </div>
                        </div>
                        <div className="four wide column curcular image">
                        <div>
                                <h1 style={{textAlign: 'center',color: 'aliceblue'}}>Following</h1>
                                <h3 style={{textAlign: 'center',color: 'aliceblue'}}>{props.following}</h3>
                            </div>
                        </div>
                        <div className="four wide column curcular image">
                        <div>
                                <h1 style={{textAlign: 'center',color: 'aliceblue'}}></h1>
                                <h3 style={{textAlign: 'center',color: 'aliceblue'}}></h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProfileTop;

/*{<div className="four wide column curcular image">}
                        <div>
                                <h1 style={{textAlign: 'center',color: 'aliceblue'}}>Hits</h1>
                                <h3 style={{textAlign: 'center',color: 'aliceblue'}}>200k</h3>
                            </div>
                        </div>*/