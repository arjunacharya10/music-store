import React from 'react';
import PlayCardList from './PlayCardList';

class ListData extends React.Component{
    state={
        term: '',
        currentRoute:'back'
    }

    onRouteChange=(route)=>{
        this.setState({currentRoute:route});
    }

    onInputChange=(event)=>{
        this.setState({term:event.target.value})
    }

    onComponentDidMount=()=>{
        this.setState({currentRoute:'back',term:''})
    }


    render(){
        return(
            <div>
            {
                this.state.currentRoute==='newplaylist'?
                    <form className="ui form" onSubmit={()=>{this.setState({currentRoute:'back'});this.props.onPlaylistSubmit(this.state.term);this.setState({term:''})}}>
                    <div className="field">
                            <div class="ui inverted transparent big icon input">
                                <input 
                                    style={{color: 'white',marginLeft: '50px'}} 
                                    type="text" 
                                    placeholder="Enter Playlist Name..."
                                    value={this.state.term}
                                    onChange={this.onInputChange}/>
                            </div>
                        </div>
                </form>:
                    <h2 onClick={()=>this.onRouteChange('newplaylist')} style={{cursor:'pointer',color:'white'}}  >+</h2>
            }
            {
                this.props.playlists.length?
                <div >
                    <PlayCardList onImageClicked={this.props.onImageClicked} playlists={this.props.playlists} onRemovePlaylist={this.props.onRemovePlaylist}/>
                </div>: 
                <h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Playlists Found</h2>   
            }
            </div>
        )
    }
}

export default ListData;