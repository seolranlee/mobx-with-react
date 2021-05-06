import BasketItem from './BasketItem'
import { inject, observer } from 'mobx-react'


// 리스트를 렌더링 하게 될 때에 그  내부에 있는 컴포넌트에도 observer를 구현해주어야 성능적으로 최적화가 일어난다
const BasketItemList = ({ items, onTake }) => {
  const itemList = items.map(item => (

    // 컴포넌트 최적화
    // 세부참조는 최대한 늦게 하자
    // 여기서 item 에서 name, price, count 를 조회하는것이 세부참조

    // as-is

    // <BasketItem
    //   name={item.name}
    //   price={item.price}
    //   count={item.count}
    //   key={item.name}
    //   onTake={onTake}
    // />

    // 변동이 일어날 수 있는 count 값의 세부참조를 우리는 BasketItem 컴포넌트 내부에서 하게 된다면, 더 높은 성능으로 컴포넌트를 업데이트 할 수 있다. 여기서 item.name 값은 바뀌지 않기 때문에 key 설정 부분에선 문제가 되지 않는다.
    // to-be
    <BasketItem
      item={item}
      key={item.name}
      onTake={onTake}
    />
  ))
 return (
   <div>
     {itemList}
     <hr />
   </div>
 ) 
}

export default inject(({ market }) => ({
  items: market.selectedItems,
  onTake: market.take,
}))(observer(BasketItemList))