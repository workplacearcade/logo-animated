import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Logo } from '../src';

class Main extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      rotate: true
    }
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
  }
  
  start(){
    this.setState({ rotate: true });
  }

  false(){
    this.setState({ rotate: false });
  }
  
  render() {
    return(
      <div>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.start}>Start</button>
        <Logo rotate={this.state.rotate} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));