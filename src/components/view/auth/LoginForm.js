import React, { Component } from "react";
import { TextFieldGroup } from "../../commons";
import Styles from './Styles.css';
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      login: {
        email: "",
        password: ""
      }
    };
  }
  updateItem(event) {
    event.preventDefault();
    let updated = Object.assign({}, this.state.login);
    updated[event.target.name] = event.target.value;
    this.setState({ login: updated });
  }
  submitItem(event) {
    event.preventDefault();
    this.props.submit(this.state.login);
  }
  render() {
    const { errors } = this.props;
    return (
      /*<div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your NetHub account</p>
              <form action="dashboard.html">
                <TextFieldGroup
                  type="email"
                  error={errors.email}
                  placeholder="Email Address"
                  name="email"
                  value={this.state.login.email}
                  onChange={this.updateItem.bind(this)}
                />
                <TextFieldGroup
                  type="password"
                  error={errors.password}
                  placeholder="Password"
                  name="password"
                  value={this.state.login.password}
                  onChange={this.updateItem.bind(this)}
                />
                <input
                  onClick={this.submitItem.bind(this)}
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
          </div>
        </div>
         */

      <div className="loginbody">
        <div className="sign-panel">
          <div className="row">
            <div className="col-lg-6">
              <div className="loginform">
                <h3>SIGN IN</h3>
                <form action="dashboard.html">
                  <TextFieldGroup
                    type="email"
                    error={errors.email}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.login.email}
                    onChange={this.updateItem.bind(this)}
                  />
                  <TextFieldGroup
                    type="password"
                    error={errors.password}
                    placeholder="Password"
                    name="password"
                    value={this.state.login.password}
                    onChange={this.updateItem.bind(this)}
                  />
                  <input
                    onClick={this.submitItem.bind(this)}
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
              <div className="loginform">
                <h3>LOGIN VIA SOCIAL MEDIA</h3>
                <a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>Login via Twitter</a>
                <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>Login via facebook</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loginform">
                <img src="http://theNetHub.com/images/afrofinlogo.jpg" className="loginlogo" />
                <h2>NetHub</h2>
              </div>
              <div className="loginform">

                <a href="/register" className="btn btn-block btn-signup"> Sign Up</a>

                <p>Non profit network working on behalf of the black community in the Finland.</p>

                <img src="http://theNetHub.com/images/signin.jpg" className="loginimg" />
                <a href="">www.NetHub.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
