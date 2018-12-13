
import ChartStore from 'stores/ChartStore';

/**
 * Root Store Class
 */
export class RootStore {

  public chartStore: ChartStore;

  constructor() {
    this.chartStore = new ChartStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
