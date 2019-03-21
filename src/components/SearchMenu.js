import React from 'react';

class SearchMenu extends React.Component{
    state={
        active:{
            b1: true,
            b2: false,
            b3: false
        }
    };

    onTracksClicked=()=>{
        this.setState({active:{
            b1: true,
            b2: false,
            b3: false
        }});
    }

    onArtistsClicked=()=>{
        this.setState({active:{
            b1: false,
            b2: true,
            b3: false
        }});
    }

    onAlbumsClicked=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: true
        }});
    }


    render(){
        return(
            <div class="ui inverted center">
                        <div className="ui inverted secondary pointing menu">
                            <a onClick={()=>{this.onTracksClicked();this.props.onRouteChange('tracks')}} className={this.state.active.b1? 'active item':'item'}>
                            Songs
                            </a>
                            <a onClick={()=>{this.onArtistsClicked();this.props.onRouteChange('artists')}} className={this.state.active.b2? 'active item':'item'}>
                            Artists
                            </a>
                            <a onClick={()=>{this.onAlbumsClicked();this.props.onRouteChange('albums')}} className={this.state.active.b3? 'active item':'item'}>
                            Albums
                            </a>
                        </div>
                    </div>
        );
    }
}

export default SearchMenu;