import React from "react";

class Searchbar extends React.Component{
    state = {term:""}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                   <div className="ui field">
                        <label>Search Image</label>
                        <input 
                            className="ui input" 
                            value={this.state.term} 
                            type="text" 
                            onChange={e => this.setState({term:e.target.value})}
                        />
                   </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
