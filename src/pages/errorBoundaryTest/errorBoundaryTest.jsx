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
          <p className="errorBoundaryTest_text"> Oops! Something went wrong</p>
          <span>Refresh your browser to reload the CounterApp</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryTest;
