import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      <Router>
        <h1><b>Login</b></h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Email:</h3>
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <h3>Password:</h3>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </Router>
      </div>
    );
  }
}
