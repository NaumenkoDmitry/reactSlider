import React, { Component } from 'react';
import data from '../data';
import Slider from '../Slider';

class ListSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      imgmap:data,
      index:0,
      slideInterval:1
    }
    this.intervalId = null;
  }
  /* nextClic=()=>{
    const {imgmap,index}=this.state;
    this.setState({
      index:imgmap[index].id 
    })
  } */

  nextClic=()=>{
    const {imgmap,index}=this.state;
    this.setState({
      index:(index +1) % data.length
    })
  }
  lastClic = () => {
    const {index, imgmap} = this.state;
    if( index === 0) {
        this.setState( {
          index: imgmap.length-1 
        });
    } else {
        this.setState( {index: index-1})
    }
}
  StartSlideShow=()=>{
    this.intervalId = setInterval(()=>{
      this.nextClic()
    },1000)
  }
  StopSlideShow=()=>{
    clearInterval(this.intervalId)
  }
  render() {
    const { imgmap,index } = this.state;

    return (
      <section>
          <Slider 
          last={this.lastClic} 
          next={this.nextClic} 
          StartSlideShow={this.StartSlideShow} 
          StopSlideShow={this.StopSlideShow} 
          id={imgmap[index].id} 
          altName={imgmap[index].altName} 
          nasaPicture={imgmap[index].nasaPicture}/>
          
      </section>
    );
  }
}

export default ListSlider;
