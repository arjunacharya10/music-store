import React from 'react';
import './FooterComp.css';

const FooterComp=({songid,clickNextPrev})=>{

    
    return(
        <div class="footer">
                            <div className="buttons" onClick={()=>{clickNextPrev(-1)}} style={{padding:'27px',cursor:'pointer',marginRight:'5px'}}><i class="step backward icon"></i></div>
                            <div style={{width:'1760px'}}>
                                <iframe id="myiframe" src={`https://open.spotify.com/embed/track/${songid}`} width="100%" height="90" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div className="buttons" onClick={()=>{clickNextPrev(1)}} style={{padding:'27px',cursor:'pointer',marginLeft:'5px'}}><i class="step forward icon"></i></div>
        </div>
    );
}

export default FooterComp;