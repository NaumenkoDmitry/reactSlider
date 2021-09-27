import React, { Component } from 'react';
import "./style.css"
class Slider extends Component {
  constructor(props){
    super(props);
    this.state={
      index:0
    }
  }
 
  render() {

    const { id,altName,nasaPicture,next,last}=this.props;
    

    return (
      <div>
        <h1>{id}</h1>
        <div>
          <img className="slidePicter" src={nasaPicture}  alt={altName}/>
          <button onClick={last}> last </button>
          <button onClick={next}> next </button>
        </div>
      </div>
    );
  }
}

export default Slider;
