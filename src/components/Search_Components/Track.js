import React from 'react';
import img from '../sym6.png'

const Track =()=>{
    return(
        <div className="ui container">
            <div className="ui segment">
                <div className="ui item">
                <div class="ui divider"></div>
                    <img class="ui middle aligned tiny image" src={img}/>
                    <span>
                        <p>Title</p>
                        <p>Artist Name</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Track;