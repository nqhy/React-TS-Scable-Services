import React from 'react';

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    // eslint-disable-next-line no-console
    console.error(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Need To Be Update UI Error In The Future
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
