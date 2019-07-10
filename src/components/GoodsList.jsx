import React from 'react'
import GoodsItem from './GoodsItem'


const GoodsList = ({goods, reverseFunc, sortFunc, resetFunc}) => (
  <div>
    <div>
      <button onClick={resetFunc}>reset</button>
      <button onClick={reverseFunc}>reverse</button>
      <button onClick={() => sortFunc('alphabetically')}>Sort alphabetically</button>
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