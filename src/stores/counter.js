import { makeObservable, observable, action } from 'mobx';

export default class CounterStore {
  constructor(){
    makeObservable(this);
  }
  @observable number = 0;

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}