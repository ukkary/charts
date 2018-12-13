
import * as React from 'react';
import styled from 'styled-components';

import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { IChart } from 'stores/ChartStore';

export interface IProps {
  charts: IChart[];
};

/**
 * Lines
 */
export default class Lines extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {

    // const data = [
    //   { name: 'a', uv: 12, pv: 5 },
    //   { name: 'b', uv: 13, pv: 3 },
    //   { name: 'c', uv: 19, pv: 9 },
    //   { name: 'd', uv: 11, pv: 10 },
    //   { name: 'e', uv: 9, pv: 12 },
    //   { name: 'f', uv: 22, pv: 13 }
    // ];

    const data = this.props.charts.map((d: IChart) => {
      return {
        name: d.timestamp,
        timestamp: d.timestamp,
        bar: [d.low, d.high]
      };
    })

    return (
      <LinesWrapper>
        <ResponsiveContainer width="90%" minWidth={ 400 } minHeight={ 200 }>
          <LineChart data={ data }>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="uv" stroke="#8884d8" />
            <Line dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </LinesWrapper >
    );
  }

}

const LinesWrapper = styled.div`
  width: 100%;
`;
