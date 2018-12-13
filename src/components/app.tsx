
import * as React from 'react';
import styled from 'styled-components';

import Charts from 'components/organisms/Charts';

/**
 * Index App
 */
export default class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Wrapper>
        <Charts />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 0px;
`
