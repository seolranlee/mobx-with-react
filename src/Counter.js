import React, { Component } from 'react'
import { observer, inject } from "mobx-react";

// inject 함수는 mobx-react에 있는 함수로써, 컴포넌트에서 스토어에 접근할 수 있게 해준다.
// 정확히는, 스토어에 있는 값을 컴포넌트의 props로 '주입'해준다.
@inject('counter')
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props 
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter