import React from 'react';
import UserList from './UserList';

class SearchUsers extends React.Component{

    state={
        term: '',
        users:[]
    };

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        const filteredUsers = this.props.users.filter(user=>{
            console.log(user);
			return user.name.toLowerCase().includes(this.state.term.toLowerCase());
        });
        this.setState({users:filteredUsers});
    }

    

    render(){

    return(
        <div>
            <div className="search-bar ui segment" style={{background: '#181818'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                            <div class="ui inverted transparent massive icon input">
                                <input 
                                    style={{color: 'white',marginLeft: '50px'}} 
                                    type="text" 
                                    placeholder="Search Users..."
                                    value={this.state.term}
                                    onChange={this.onInputChange}/>
                                <i class="search icon"></i>
                            </div>
                        </div>
                </form>
                
            </div>
            {
                this.state.users.length?
                    <UserList onUnFollow={this.props.onUnFollow} onFollow={this.props.onFollow} following={this.props.following} users={this.state.users}/>:
                    <h2 style={{color: 'grey',marginTop: '30px',textAlign: 'center'}}>No Users Found</h2>
            }
        </div>
    );
    }
}

export default SearchUsers;
