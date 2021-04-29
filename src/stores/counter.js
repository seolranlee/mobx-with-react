import { Component } from 'react'
import { makeObservable, observable, action } from 'mobx'
import { observer } from "mobx-react";

@observer
class CounterStore extends Component {
  @observable number = 0;
  
  constructor() {
    super()
    makeObservable(this);
  }
  
  @action increase = () => {
    this.number++
  }

  @action decrease = () => {
    this.number--
  }
}

export default CounterStore