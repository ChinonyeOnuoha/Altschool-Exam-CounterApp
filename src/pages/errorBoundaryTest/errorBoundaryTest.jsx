// 

// errorBoundaryTest.jsx
import React, { Component } from 'react';
import './errorBoundaryTest.css'; 

class ErrorBoundaryTest extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundaryTest_main">
          <p className="errorBoundaryTest_text">Something went wrong</p>
        </div>
        
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaryTest;
