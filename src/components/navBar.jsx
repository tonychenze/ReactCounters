import React, { Component } from "react";
// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           <span className="badge badge-pill badge-secondary">
//             {this.props.counterTotal}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

const NavBar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Item:{" "}
        <span className="badge badge-pill badge-secondary m-2">
          {counters.filter(c => c.value > 0).length}
        </span>
        Number:
        <span className="badge badge-pill badge-secondary m-2">
          {counters.map(c => c.value).reduce((acc, item) => acc + item)}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
