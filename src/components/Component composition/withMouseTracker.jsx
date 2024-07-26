import React, { Component } from 'react';

const withMouseTracker = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mouseX: 0,
        mouseY: 0,
      };
    }

    handleMouseMove = (event) => {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMouseMove} style={{ height: '100vh' }}>
          <WrappedComponent {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

export default withMouseTracker;
