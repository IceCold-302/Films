import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleHeader = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Issam's Movies
        </a>
        <button onClick={this.toggleHeader} className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${this.state.open ? "" : "collapse"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/films"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favoris"
                className="nav-link"
                activeClassName="active"
              >
                Favoris
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
