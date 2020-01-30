import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Business } from "../containers";

class Nav extends Component {
  render() {
    const authLinks = (
      <ul className="navbar-nav ml-auto" style={{color: "#c6e2ed"}}>
      <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Amebo   
          </Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Jobs 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">
            Business 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/MarketPLace">
            MarketPLace 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.props.logout} className="nav-link">
            <img
              className="rounded-circle"
              src={this.props.user.avatar}
              alt={this.props.user.name}
              title="You must have a Gravatar connected to your email to display an image"
              style={{ width: "25px", marginRight: "5px" }}
            />{" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4" style={{color: "gold"}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            NetHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Profiles
                </Link>
              </li>
            </ul>
            {this.props.isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
