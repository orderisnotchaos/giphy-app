import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Features from './components/Features';

class ClassComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      gifs : [] 
    };
  }

  componentDidMount(){

    fetch("https://api.giphy.com/v1/gifs/trending?api_key=rjk4nho1TWlmCCW79YKOY4faqanCW4NJ")
    .then((res) =>{
      return res.json();
    })
    .then(data =>{

      let temp = [];
      for(let d in data.data){
        temp.push({gif_url:data.data[d].images.downsized.url,gif_name:data.data[d].username });
      }

      this.setState({
        gifs: temp
      })
    })
    .catch(
      e => console.log(e)
    );
  }

  render(){
//    let Features = this.state.children.type;

    return <Features gifs={this.state.gifs}/>;
  }
};


function App() {
  return (
    <div className="App">

        <Navigation />
        <ClassComponent>
        <Features />
        </ClassComponent>

    </div>
  );
}

export default App;

