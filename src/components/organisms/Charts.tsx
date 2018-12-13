
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import Bars from 'components/molecules/Bars';
import rootStore, { RootStore } from 'stores/RootStore';

interface IProps {
  rootStore?: RootStore;
};

/**
 * Example Organisms
 */
@inject('rootStore') @observer
export default class Charts extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    const chartStore = rootStore.chartStore;
    chartStore.fetchChart();
  }

  public render(): JSX.Element {
    return (
      <>
        <ExampleTitle>直近のチャート</ExampleTitle>
        <ChartArea>
          <Bars charts={ rootStore!.chartStore.chartData.slice(0, 100) } />
        </ChartArea>
      </>
    );
  }
}

const ExampleTitle = styled.h1`
  color: blue;
`;

const ChartArea = styled.div`
  width: 100%;
`;
