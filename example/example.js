import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Logo } from '../src';

class Main extends PureComponent {
  render() {
    return(
      <Logo />
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));