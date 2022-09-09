import React from "react";
import Gif from "./Gif";
function Features(props){

    if(props.gifs.length !== 0){
        return (
            <div className="container">
                <div className="row text-center">



                    <Gif gif = {props.gifs[0].gif_url} title = {props.gifs[0].gif_name}/>

                    <Gif gif = {props.gifs[1].gif_url} title = {props.gifs[1].gif_name}/>

                    <Gif gif = {props.gifs[2].gif_url} title = {props.gifs[2].gif_name}/>

                    <Gif gif = {props.gifs[3].gif_url} title = {props.gifs[3].gif_name}/>

                </div>
            </div>
        );
    }

    return <p>Wasn´t able to load features</p>;
}

export default Features;