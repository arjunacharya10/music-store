import React from 'react';
import PlayCardList from './PlayCardList';
import axios from 'axios';
import ListData from './ListData';
import PlayInfo from './PlayInfo';

class Playlists extends React.Component{

    state={
        term: '',
        currentRoute:'listdata',
        playlists: [],
        playlistSongs:[],
        title:'',
        image:''
    }

    onRouteChange=(route)=>{
        this.setState({currentRoute:'newplaylist'});
    }

    onRemovePlaylist=(id)=>{
        console.log(id);
        axios.post('http://localhost:3000/delete-playlist',{
            uid: this.props.currentUser.id,
            pid: id
        })
        .then(res=>{
            console.log(res);
            if(res.data==='success'){
                    axios.post('http://localhost:3000/get-playlist',{
                        id: this.props.currentUser.id,
                    })
                    .then(pl=>{
                        console.log(pl.data);
                        this.setState({playlists:pl.data});
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        })
        .catch(err=>{
            console.log(err);
        })  
    }

    onBackClicked=(route)=>{
        this.setState({currentRoute:route});
    }

    onImageClicked=(id,name,image)=>{
        console.log(id);

        this.setState({image:image,title:name,currentRoute:'playlistinfo'});
    }

    onPlaylistSubmit=(termVal)=>{
        if(termVal){
            axios.post('http://localhost:3000/create-playlist',{
                id: this.props.currentUser.id,
                name: termVal
            })
            .then(pl=>{
                console.log(pl.data);
                this.setState({playlists:pl.data,term:''});
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    componentDidMount=()=>{
        axios.post('http://localhost:3000/get-playlist',{
                id: this.props.currentUser.id,
            })
            .then(pl=>{
                console.log(pl.data);
                this.setState({playlists:pl.data});
            })
            .catch(err=>{
                console.log(err);
            })
    }

    render()
    {
            return(
            <div style={{marginTop:'50px'}} className="ui container center">
                <h1 style={{color:'white'}}>Playlists:</h1>
                {
                    this.state.currentRoute==='listdata'?
                    <ListData onImageClicked={this.onImageClicked} playlists={this.state.playlists} onPlaylistSubmit={this.onPlaylistSubmit} onRemovePlaylist={this.onRemovePlaylist}/>
                    :
                    <PlayInfo title={this.state.title} image={this.state.image} onBackClicked={this.onBackClicked}/>
                }
                <div className="ui divider"></div>
            </div>
        );
    }
}

export default Playlists;