
import * as React from 'react';
import styled from 'styled-components';

import {
  ResponsiveContainer, Bar, BarChart,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import { IChart } from 'stores/ChartStore';

export interface IProps {
  charts: IChart[];
};

/**
 * Bar
 */
export default class Bars extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {

    const data = this.props.charts.map((d: IChart) => {
      return {
        name: d.timestamp,
        timestamp: d.timestamp,
        bar: [d.low, d.high]
      };
    });

    console.log(data);

    return (
      <LinesWrapper>
        <ResponsiveContainer width="90%" minWidth={ 900 } minHeight={ 500 }>
          <BarChart width={ 730 } height={ 250 } data={ data }>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis domain={ [370000, 390000] } />
            <Tooltip />
            <Legend />
            <Bar dataKey="bar" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </LinesWrapper >
    );
  }

  // private handleLegendMouseEnter() {
  //   console.log('mouse enter');
  // }

  // private handleLegendMouseLeave() {
  //   console.log('mouse leave');
  // }
}

const LinesWrapper = styled.div`
  width: 100%;
  display: flex;
`;
