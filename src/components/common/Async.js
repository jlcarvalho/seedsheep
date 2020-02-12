import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';

export const TIME_BETWEEN_CONTENT = 1500;

export class LazyContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const { onVisible, ms } = this.props;

    const showResult = () => {
      this.setState({ visible: true });

      if (onVisible) onVisible();
    };

    const timer = setTimeout(
      showResult,
      ms,
    );

    return () => clearTimeout(timer);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState);
  }

  render() {
    const { children, fallback } = this.props;
    const { visible } = this.state;

    return <>{visible ? children : fallback}</>;
  }
}

export default { LazyContent };
