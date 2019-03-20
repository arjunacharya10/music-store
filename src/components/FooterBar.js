import React from 'react';
import SongInfo from './SongInfo';

const FooterBar = ()=>{
    return(
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <SongInfo/>
                    <SongInfo/>
                    <SongInfo/>
                    <SongInfo/>
                </div>
            </div>

        </div>
    )
}

export default SongInfo;