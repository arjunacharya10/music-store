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


class MainMenu extends React.Component{

    state={
        currentRoute: 'home',
        access_token: '',
        butClicked: false,
        butColor: '#818181',
        cart: [],
        cartCost: 0
    };
    onRouteChange = (route)=>{
        this.setState({currentRoute: route});
    }

    componentDidMount(){
        this.setState({access_token: this.props.access_token});
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
                            <SearchList currentUser={this.props.currentUser} access_token={this.state.access_token} updateCart={this.updateCart} cart={this.state.cart}/>
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
                            <CartMain cartList={this.state.cart} removeFromCart={this.removeFromCart} cartCost={this.state.cartCost}/>
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