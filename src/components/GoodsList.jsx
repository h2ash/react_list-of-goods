import React from 'react'
import GoodsItem from './GoodsItem'


const GoodsList = ({goods, reverseFunc}) => (
  <div>
    <div>
      <button onClick={reverseFunc}>reverse</button>
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