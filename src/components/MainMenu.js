import React from 'react';
import firebase from 'firebase';
import './MainMenu.css';
import HomeLogo from './HomeButton';
import HomeMain from './HomeMain';
import Profile from './Profile';
import SideNav from './SideNav';
import HomeScreen from './HomeScreen';
import FooterBar from './FooterBar';
import SearchList from './SearchList';
import CartMain from './Cart/CartMain';
import axios from 'axios';


class MainMenu extends React.Component{

    state={
        user: this.props.currentUser,
        currentRoute: 'home',
        access_token: '',
        butClicked: false,
        butColor: '#818181',
        cart: [],
        cartCost: 0,
        purchasedSongs: []
    };
    onRouteChange = (route)=>{
        this.setState({currentRoute: route});
    }

    componentDidMount(){
        this.setState({user:this.props.currentUser});
        console.log(this.state.user);
        axios.post('http://localhost:3000/send-purchased',{
                    id: this.state.user.id
                })
                .then(psongs=>{
                    console.log("Song info:")
                    console.log(psongs);
                    var sdata = psongs.data
                    var songs=[];
                    for(var i=0;i<psongs.data.length;i++){
                        var song=[];
                        var curid = sdata[i].sid;
                        for(var j=i;j<sdata.length;j++){
                            if(sdata[j].sid === curid){
                                song.push(sdata[j].name);
                            }
                            else{
                                break;
                            }
                        }
                        i=j-1;
                        console.log(song);
                        songs.push({
                            id: sdata[i].sid,
                            trackName: sdata[i].sname,
                            link: sdata[i].link,
                            image: sdata[i].image,
                            artistNames: song
                        })
                    }
                    console.log("Purchased songs:");
                    console.log(songs);
                    this.setState({purchasedSongs:songs,cart:[],cartCost:0});
                })
                .catch(err=>{
                    console.log('Failed to fetch purhcased songs');
                })
        this.setState({access_token: this.props.access_token});
        this.setState({user:this.props.currentUser});
        console.log(this.state.access_token);
    }

    updateCart=(track,trackCost)=>{
        track.cost = trackCost;
        const currentCart = this.state.cart;
        currentCart.push(track);
        var cCost=0;
        currentCart.forEach(item=>{
            cCost+=item.cost;
        });
        this.setState({cart:currentCart,cartCost:cCost});
        console.log(this.state.cart[this.state.cart.length-1].cost);
    }

    removeFromCart=(index)=>{
        const currentCart = this.state.cart;
        currentCart.splice(index,1);
        var cCost=0;
        currentCart.forEach(item=>{
            cCost+=item.cost;
        });
        this.setState({cart:currentCart,cartCost:cCost});
    }

    onBuySongs=()=>{
        console.log(this.state.user);
        this.state.cart.forEach(song=>{
            axios.post('http://localhost:3000/purchase',{
                song: song,
                user: this.state.user
            })
            .then(res=>{
                axios.post('http://localhost:3000/send-purchased',{
                    id: this.state.user.id
                })
                .then(psongs=>{
                    var sdata = psongs.data
                    var songs=[];
                    for(var i=0;i<psongs.data.length;i++){
                        var song=[];
                        var curid = sdata[i].sid;
                        for(var j=i;j<sdata.length;j++){
                            if(sdata[j].sid === curid){
                                song.push(sdata[j].name);
                            }
                            else{
                                break;
                            }
                        }
                        i=j-1;
                        songs.push({
                            id: sdata[i].sid,
                            trackName: sdata[i].sname,
                            link: sdata[i].link,
                            image: sdata[i].image,
                            artistNames: song
                        })
                    }
                    this.setState({purchasedSongs:songs,cart:[],cartCost:0});
                })
                .catch(err=>{
                    console.log('Failed to fetch purhcased songs');
                })
            })
            .catch(err=>{
                console.log(err);
            })
        });
        alert('Thank you For Purchasing! happy listening..');
    }
    
    
    render()
    {
        if(this.state.currentRoute==='profile')
        {
            return(
                <div>
                    <SideNav onRouteChange={this.onRouteChange} currentUser={this.props.currentUser} onSignOut={this.props.onSignOut}/>
                        <div className="main" style={{marginRight:'1000px'}}>
                            <Profile currentUser={this.props.currentUser}/>
                        </div>
                        <div class="footer">
                            <p>Footer</p>
                        </div>
                </div>
            );
        }
        else if(this.state.currentRoute==='home'){
            console.log(this.props.access_token);
            return(
                <div>
                    <SideNav onRouteChange={this.onRouteChange} onSignOut={this.props.onSignOut} currentUser={this.props.currentUser}/>
                        <div className="main" style={{marginRight:'1000px'}}>
                            <HomeScreen/>
                        </div>
                        <div class="footer">
                            <p>Footer</p>
                        </div>
                </div>
            );

        }
        else if(this.state.currentRoute==='search')
        {
            return(
                <div>
                    <SideNav onRouteChange={this.onRouteChange} currentUser={this.props.currentUser} onSignOut={this.props.onSignOut}/>
                        <div className="main" style={{marginRight:'1000px'}}>
                            <SearchList currentUser={this.props.currentUser} access_token={this.state.access_token} updateCart={this.updateCart} cart={this.state.cart} purchasedSongs={this.state.purchasedSongs}/>
                        </div>
                        <div class="footer">
                            <p>Footer</p>
                        </div>
                </div>
            );
        }
        else if(this.state.currentRoute==='cart'){
            return(
                <div>
                    <SideNav onRouteChange={this.onRouteChange} currentUser={this.props.currentUser} onSignOut={this.props.onSignOut}/>
                        <div className="main" style={{marginRight:'1000px'}}>
                            <CartMain cartList={this.state.cart} removeFromCart={this.removeFromCart} cartCost={this.state.cartCost} onBuySongs={this.onBuySongs}/>
                        </div>
                        <div class="footer">
                            <p>Footer</p>
                        </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default MainMenu;















/*return(
            <div>
                        <div className="ui visible inverted left verticle sidebar sidenav" style={{background: 'black'}}>
                            <HomeLogo/><br/><br/>
                            <a href="#"><i className="icon home">&nbsp;&nbsp;Home</i></a><br/>
                            <a href="#"><i className="icon search">&nbsp;&nbsp;Search</i></a><br/>
                            <a href="#"><i className="icon server">&nbsp;&nbsp;Library</i></a><br/>
                            <div className="line"></div>
                        </div>
                        <div className="ui verticle main" style={{background: 'linear-gradient(to left , #0e4424 , #222222)',marginLeft:'250px'}}>
                            <span>Signed In!</span><br/>
                            <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
                            <h1>{props.currentUser?props.currentUser.displayName:null}</h1>
                            <img alt="Profile Picture" src={firebase.auth().currentUser.photoURL} style={{width: '500px',height:'500px'}}/>
                        </div>
                    
            </div>
    );*/