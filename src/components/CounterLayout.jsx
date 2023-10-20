// CounterLayout.jsx 
//Aany errors that occur within the components rendered within the CounterLayout will be caught by the ErrorBoundaryTest, and will display the error message "Something went wrong" to the user
import React from 'react';
import ErrorBoundaryTest from '../pages/errorBoundaryTest/errorBoundaryTest';

function CounterLayout({ children }) {
  return (
      <ErrorBoundaryTest>
        {children}
      </ErrorBoundaryTest>
  );
}

export default CounterLayout;
