import React from 'react';

class SearchBar extends React.Component{

    state={
        term: ''
    };

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmitForm(this.state.term);
    }

    render(){
    return(
        <div className="search-bar ui segment" style={{background: '#383838'}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                        <div class="ui inverted transparent massive icon input">
                            <input 
                                style={{color: 'white',marginLeft: '100px'}} 
                                type="text" 
                                placeholder="Start Typing..."
                                value={this.state.term}
                                onChange={this.onInputChange}/>
                            <i class="search icon"></i>
                        </div>
                    </div>
            </form>
        </div>
    );
    }
}

export default SearchBar;


/*
<div className="search-bar ui segment" style={{background: 'black'}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <input
                        placeholder="Start Typing.."
                        style={{background: 'black',color:'white'}} 
                        type="text" 
                        value={this.state.term} 
                         onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>

*/