
import { action, observable, IObservableArray, runInAction } from 'mobx';
// import moment from 'moment';

import chartApi from 'apis/chart';


export interface IChart {
  opening: number;
  high: number;
  low: number;
  closing: number;
  timestamp: string;
}

export default class ChartStore {

  constructor() {
  }

  @observable public chartData: IObservableArray<IChart> = observable.array();;

  /**
   * Example for fetch some data from server
   */
  @action.bound public async fetchChart() {
    const params = {
      symbol: 'btc_jpy',
      interval: '1min'
    };

    const res = await chartApi().get(params);
    const candles = res.data.data.candlestick[0].ohlcv as any[];

    runInAction(() => {
      if (candles) {
        const data = candles.map((candle) => {
          return {
            opening: candle[0],
            high: candle[1],
            low: candle[2],
            closing: candle[3],
            timestamp: candle[5]
          };
        });

        this.chartData.replace(data);
      }
    });
  }
}