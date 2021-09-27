import React, { Component } from 'react';
import data from '../data';
import Slider from '../Slider';

class ListSlider extends Component {
  constructor(props){
    super(props);
    this.state={
      imgmap:data,
      index:0
    }
  }
  nextClic=()=>{
    const {imgmap,index}=this.state;
    this.setState({
      index:imgmap[index].id 
    })
  }
  lastClic=()=>{
    const {index}=this.state;
    this.setState({
      index:index-1
    })
  }
  render() {
    const { imgmap,index } = this.state;

    return (
      <section>
          <Slider last={this.lastClic} next={this.nextClic} id={imgmap[index].id} altName={imgmap[index].altName} nasaPicture={imgmap[index].nasaPicture}/>
          
      </section>
    );
  }
}

export default ListSlider;
