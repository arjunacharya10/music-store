import React from 'react';

class SearchMenu extends React.Component{
    


    render(){
        return(
            <div class="ui inverted center">
                        <div className="ui inverted secondary pointing menu">
                            <a onClick={()=>{this.props.tc();this.props.onRouteChange('tracks')}} className={this.props.active.b1? 'active item':'item'}>
                            Songs
                            </a>
                            <a onClick={()=>{this.props.arc();this.props.onRouteChange('artists')}} className={this.props.active.b2? 'active item':'item'}>
                            Artists
                            </a>
                            <a onClick={()=>{this.props.alc();this.props.onRouteChange('albums')}} className={this.props.active.b3? 'active item':'item'}>
                            Albums
                            </a>
                        </div>
                    </div>
        );
    }
}

export default SearchMenu;