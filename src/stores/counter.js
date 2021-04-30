import { makeObservable, observable, action } from 'mobx'
export default class CounterStore {
  @observable number = 0;
  
  constructor(root) {
    this.root = root
    makeObservable(this);
  }
  
  @action increase = () => {
    this.number++
  }

  @action decrease = () => {
    this.number--
  }
}