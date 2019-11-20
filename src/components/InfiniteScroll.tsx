/** @format */

import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
// import 'intersection-observer';

const Wrapper = styled.div`
  height: 100px;
  margin: 30px;
`;

interface Props {
  threshold?: number;
  onScroll: () => void;
  loading: boolean;
}

class InfiniteScroll extends Component<Props> {
  state = {
    page: 0,
    prevY: 0,
  };

  static defaultProps = {
    threshold: 0.1,
  };

  observer: any;
  loadingRef: any;

  componentDidMount() {
    const { threshold } = this.props;
    this.observer = new IntersectionObserver(this.handleObserver, {
      root: null,
      threshold,
    });
    this.observer.observe(this.loadingRef);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.loadingRef);
  }

  handleObserver = (entities: any) => {
    const { prevY } = this.state;
    const { onScroll } = this.props;

    const y = entities && entities[0].boundingClientRect.y;
    if (prevY > y) onScroll();
    this.setState({ prevY: y });
  };

  render() {
    const { loading, children } = this.props;

    return (
      <Fragment>
        {children}
        <Wrapper ref={loadingRef => (this.loadingRef = loadingRef)}>
          {loading && <div>Loading...</div>}
        </Wrapper>
      </Fragment>
    );
  }
}

export default InfiniteScroll;
