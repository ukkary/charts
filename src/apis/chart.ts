
import request from 'utils/request';
// import to from 'utils/to';

const chartUrl = 'https://public.bitbank.cc';

export interface IChartParam {
  symbol: string;
  interval: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
}

const chartApi = {
  async get(params: IChartParam) {
    return request().send({
      method: 'get',
      url: `${ chartUrl }/${ params.symbol }/candlestick/${ params.interval }/20181212`,
    });
  },
}

export default () => {
  return chartApi;
}