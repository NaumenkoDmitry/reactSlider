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

    const { id,altName,nasaPicture,next,last,StartSlideShow,StopSlideShow}=this.props;
    

    return (
      <section>
        <h1>{id}</h1>
        <div>
          <img className="slidePicter" src={nasaPicture}  alt={altName}/>
          <div>
          <button onClick={last}> last </button>
          <button onClick={next}> next </button>
          </div>
         
          <div>
          <button onClick={StartSlideShow}> Start Slide Show </button>
          <button onClick={StopSlideShow}> Stop Slide Show </button>
          </div>
         

        </div>
      </section>
    );
  }
}
/* Slider.propTypes={
  id:num
} */
export default Slider;
