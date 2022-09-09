import React, {Component} from "react";

class Gif extends Component {

    constructor(props){
        super(props);
        this.state = {
            gif: props.gif,
            title: props.title
        }
    }

    render(){

        return (

            <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={this.state.gif} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{this.state.title}</h4>
                        </div>
                    </div>
            </div>
        );
    }

};


export default Gif;