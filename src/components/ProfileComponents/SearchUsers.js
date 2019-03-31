import React from 'react';

class SearchUsers extends React.Component{

    state={
        term: ''
    };

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term);
    }

    

    render(){
    return(
        <div className="search-bar ui segment" style={{background: '#181818'}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                        <div class="ui inverted transparent massive icon input">
                            <input 
                                style={{color: 'white',marginLeft: '50px'}} 
                                type="text" 
                                placeholder="Seacrh Users..."
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

export default SearchUsers;
