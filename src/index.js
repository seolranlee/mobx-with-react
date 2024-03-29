import React from 'react'
import ReactDOM from 'react-dom'
// MobX에서 프로젝트에 스토어를 적용할 때 Provider 컴포넌트 사용
import { Provider } from 'mobx-react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import RootStore from './stores'

const root = new RootStore()

ReactDOM.render(
  // Provider에 props로 전달
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
