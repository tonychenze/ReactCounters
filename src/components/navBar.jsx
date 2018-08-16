import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            {this.props.counterTotal}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
