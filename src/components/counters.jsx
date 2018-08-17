import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onDecrease, onReset } = this.props;
    return (
      <div className="m-4">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            onReset={onReset}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
