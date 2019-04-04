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
        title:'',
        image:'',
        pid:'',
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

        this.setState({pid:id,image:image,title:name,currentRoute:'playlistinfo'});
    }

    addSongToPlaylist=(sid)=>{
        axios.post('http://localhost:3000/add-to-playlist',{
            pid: this.state.pid,
            sid: sid
        }).then(res=>{
            console.log(res);
        })
        .catch(err=>{
            alert("Already Present In the playlist!");
        })
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
    /*componentDidUpdate=()=>{
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
    }*/

    removeSongFromPlaylist=(id)=>{
        axios.post('http://localhost:3000/delete-from-playlist',{
            pid: this.state.pid,
            sid: id
        })
        .then(resp=>{
            this.setState(this.state);
            this.forceUpdate();
        })
        .catch(err=>{
            console.log(err);
        })
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

    imageUpdater=(url)=>{
        if(!this.state.image){
            axios.post('http://localhost:3000/update-image',{
                pid:this.state.pid,
                uid: this.props.currentUser.id,
                link:url
            })
            .then(resp=>{
                axios.post('http://localhost:3000/get-playlist',{
                id: this.props.currentUser.id,
                })
                .then(pl=>{
                    console.log(pl.data);
                    this.setState({playlists:pl.data,image:url});
                })
                .catch(err=>{
                    console.log(err);
                })
            })
        }
    }

    render()
    {
            return(
            <div style={{marginTop:'50px'}} className="ui container center">
                <h1 style={{color:'white'}}>Playlists:</h1>
                <p style={{color:'grey'}}>If you want to make your playlist available to your followers, create a playlist called My Story and add songs to it.</p>
                {
                    this.state.currentRoute==='listdata'?
                    <ListData  onImageClicked={this.onImageClicked} playlists={this.state.playlists} onPlaylistSubmit={this.onPlaylistSubmit} onRemovePlaylist={this.onRemovePlaylist}/>
                    :
                    <PlayInfo songsChanged={this.state.songsChanged} removeSongFromPlaylist={this.removeSongFromPlaylist} imageUpdater={this.imageUpdater} pid={this.state.pid} uid={this.props.currentUser.id} addSongToPlaylist={this.addSongToPlaylist} trackItems={this.props.trackItems} setSongUrl={this.props.setSongUrl} title={this.state.title} image={this.state.image} onBackClicked={this.onBackClicked} />
                }
                <div className="ui divider"></div>
            </div>
        );
    }
}

export default Playlists;