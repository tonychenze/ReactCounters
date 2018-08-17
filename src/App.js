import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //if dont have this line. It will update the state first before setting the state.
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.counters);
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <NavBar counters={counters} />
        <Counters
          counters={counters}
          onIncrement={this.handleIncrement}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
