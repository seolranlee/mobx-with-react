import CounterStore from './counter'
import MarketStore from './market'

// 스토어간의 관계 형성
class RootStore {
  constructor() {
    // 뒷부분에서 this를 파라미터에 넣어주는게 중요하다.
    // 이렇게 함으로써 각 스토어들이 현재 루트 스토어가 무엇인지 알 수 있다.
    this.counter = new CounterStore(this)
    this.market = new MarketStore(this)
  }
}

export default RootStore