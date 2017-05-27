import React from 'react';
import { getBezierControlPoint } from './bezier'

export default class Debug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let result = getBezierControlPoint([20,20],[280,280],1);
    context.beginPath();
    context.moveTo(20,20);
    result.map(item=>{
      context.lineTo(item[0],item[1])
    })
    context.stroke();
  }

  render() {
    return (
      <canvas
        id="canvas"
        width="300px"
        height="300px"
      ></canvas>
    );
  }
};
