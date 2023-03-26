import React from "react";
import ImageCard from "./ImageCard";
import "./ImageView.css";
class ImageView extends React.Component{

    render(){
        return(
            <div className="image-list">
                {
                    this.props.image.map((img)=>{
                       return <ImageCard key={img.id} image={img}/>
                    })
                }
            </div>
        )
    }
}

export default ImageView;