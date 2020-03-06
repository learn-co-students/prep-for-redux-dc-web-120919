import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    count: 0 
  }
  getState = (state) =>  { 
    
    this.setState({count: state})
  }
  render() {
    return (
      <div className="App">
        <Header currentCount={this.state.count}/>
        <Counter getState={this.getState}/>
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.currentCount % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.currentCount + upToNext}`;
  };
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.props.getState(this.state.count)

  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
    this.props.getState(this.state.count)
  };

  // renderDescription = () => {
  //   const remainder = this.state.count % 5;
  //   const upToNext = 5 - remainder;
  //   return `The current count is less than ${this.state.count + upToNext}`;
  // };

  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
