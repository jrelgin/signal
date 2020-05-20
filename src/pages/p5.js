import React, { Component } from 'react';
import { loadableP5 as P5Wrapper } from '../scripts/loadable';
import Sketch from '../scripts/sketch';

export default class App extends Component {
  render() {
    return <P5Wrapper sketch={Sketch} />;
  }
}
