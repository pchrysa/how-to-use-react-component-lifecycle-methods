import React from 'react';
import Counter from './Counter.jsx';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isCounterHidden: true
    };
  }

  toggleCounter() {
    this.setState({
      isCounterHidden: !this.state.isCounterHidden
    });
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {

    let style = {
      marginTop: '40px',
      marginBottom: '0px'
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">

            <p style={style}>Make sure to open Developer Tools Console before you click anything.</p>

            <div className="btn-group btn-group-lg" role="group" aria-label="..." style={style}>
              <button type="button" className="btn btn-default" onClick={this.toggleCounter.bind(this)}>{this.state.isCounterHidden ? 'Show' : 'Hide'}</button>
              <button type="button" className="btn btn-success" onClick={this.incrementCounter.bind(this)}>Increment</button>
            </div>

            {this.state.isCounterHidden ? null : <Counter value={this.state.counter} />}

          </div>
        </div>
      </div>
    );
  }
}

export default Application;
