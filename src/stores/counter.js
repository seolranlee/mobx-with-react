import { makeObservable, observable, action } from 'mobx'
export default class CounterStore {
  @observable number = 1; // 기본 값 1로 업데이트
  
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