// ErrorBoundaryTest.jsx
import React, { Component } from 'react';

import './errorBoundaryTest.css';


class ErrorBoundaryTest extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundaryTest_main">
          <h1>Oops!!!</h1>
          <p className="errorBoundaryTest_text">Something went wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryTest;
