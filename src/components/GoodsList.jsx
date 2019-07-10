import React from 'react'
import GoodsItem from './GoodsItem'


const GoodsList = ({goods, reverseFunc, sortFunc, resetFunc}) => (
  <div>
    <div>
      <button onClick={resetFunc}>Reset</button>
      <button onClick={reverseFunc}>Reverse</button>
      <button onClick={() => sortFunc('alphabetically')}>Sort alphabetically</button>
      <button onClick={() => sortFunc('length')}>Sort by length</button>
    </div>
    <ul>
      {
        goods.map(goodsItem => (
          <GoodsItem currentItem={goodsItem}/>
        ))
      }
    </ul>
  </div>
)

export default GoodsList