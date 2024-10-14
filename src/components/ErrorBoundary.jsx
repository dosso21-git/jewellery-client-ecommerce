// src/components/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for when an error occurs
      return (
        <div className="text-center">
          <h1>Something went wrong.{this.state.hasError}</h1>
          <p>Please try again later</p>
        </div>
      );
    }
    return this.props.children; 
  }
}
export default ErrorBoundary;