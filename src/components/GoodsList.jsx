import React from 'react'
import GoodsItem from './GoodsItem'


const GoodsList = ({goods, reverseFunc, sortFunc, resetFunc, filterByLength, selectedValue, filtered}) => (
  <div>
    <div>
      <button onClick={resetFunc}>Reset</button>
      <button onClick={reverseFunc}>Reverse</button>
      <button onClick={() => sortFunc('alphabetically')}>
        Sort alphabetically
      </button>
      <button onClick={() => sortFunc('length')}>Sort by length</button>
    </div> <br />
    <form action="">
      Filter by length
      <select value={selectedValue} onChange={filterByLength} name="Filter by length" id="">
        <option value="1">1</option>  
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </form>
    <ul>
      {
        filtered.map(goodsItem => (
          <GoodsItem currentItem={goodsItem}/>
        ))
      }
    </ul>
  </div>
)

export default GoodsList