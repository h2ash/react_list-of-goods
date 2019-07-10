import React from 'react';
import Start from './components/Start'
import GoodsList from './components/GoodsList'


import goodsFromServer from './api/Goods'

class App extends React.Component {
  state = {
    goods: [],
    sortderGoods: [],
    filteredGoods: [],
    clickedButton: false,
    direction: 1,
    selectedValue: 1,
  }

  showData = () => {
    this.setState({
      clickedButton: true,
      goods: goodsFromServer,
      sortderGoods: goodsFromServer,
      filteredGoods: goodsFromServer,
    })
  }

  filterByLength = (event) => {
    const {value} = event.target;
    this.setState(state => ({
      selectedValue: value,
      filteredGoods: [...state.sortderGoods].filter(goodsItem => goodsItem.length >= value),
    }))
  }

  resetFunc = () => {
    this.setState(state => ({
      sortderGoods: [...state.goods],
    }))
  }

  reverseFunc = () => {
    this.setState(state => ({
      sortderGoods: [...state.sortderGoods].reverse(),
    }))
  }

  sortFunc = (typeSortBy) => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      sortderGoods: [...state.sortderGoods].sort((a, b) => {
        switch(typeSortBy) {
          case 'alphabetically':
            return a.localeCompare(b) * state.direction;
          case 'length':
            return (a.length - b.length) * state.direction;
          default:
            return 0;
        }
      }),
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Lists of goods</h1>
        {
          this.state.clickedButton
            ? <GoodsList 
                selectedValue={this.state.selectedValue}
                filterByLength={this.filterByLength}
                filtered={this.state.filteredGoods}
                resetFunc={this.resetFunc}
                sortFunc={this.sortFunc}
                reverseFunc={this.reverseFunc}
                goods={this.state.sortderGoods} 
              />
            : <Start showData={this.showData} />
        }
      </div>
    )
  }
}

export default App;
