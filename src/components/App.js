import React from "react";
import unsplash from "../api/unsplash";
import ImageView from "./ImageView";
import Searchbar from "./SearchBar";

class App extends React.Component{

    state = {image : []};

    searchHandler = async (term)=>{
        const response = await unsplash.get(
            "search/photos",{
                params:{query:term},
            }
        );
        this.setState({image: response.data.results})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:10}}>
                <Searchbar onFormSubmit={this.searchHandler}/>
                <ImageView image={this.state.image}/>
            </div>
        );
    }
}

export default App;
