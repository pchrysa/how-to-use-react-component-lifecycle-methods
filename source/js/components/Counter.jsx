import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.debug('getDefaultProps');
    console.debug('setInitialState');
  }

  componentWillMount() {
    console.debug('componentWillMount');
  }

  componentDidMount() {
    console.debug('componentDidMount');
  }

  componentWillReceiveProps() {
    console.debug('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.debug('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.debug('componentWillUpdate');
  }

  componentDidUpdate() {
    console.debug('componentDidUpdate');
  }

  componentWillUnmount() {
    console.debug('componentWillUnmount');
  }

  render() {
    console.debug('render');

    return (
      <h1 className="text-muted">Counter: {this.props.value}</h1>
    );
  }
}

export default Counter;
