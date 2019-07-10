import React from 'react';
import Start from './components/Start'
import GoodsList from './components/GoodsList'


import goodsFromServer from './api/Goods'

class App extends React.Component {
  state = {
    goods: [],
    resultList: [],
    clickedButton: false,
    direction: 1,
    selectedValue: 1,
  }

  showData = () => {
    this.setState({
      clickedButton: true,
      goods: goodsFromServer,
      resultList: goodsFromServer,
    })
  }

  filterByLength = (event) => {
    const {value} = event.target;
    this.setState(state => ({
      selectedValue: value,
      resultList: [...state.goods].filter(goodsItem => goodsItem.length >= value),
    }))
  }

  resetFunc = () => {
    this.setState(state => ({
      resultList: [...state.goods],
      selectedValue: 1,
    }))
  }

  reverseFunc = () => {
    this.setState(state => ({
      resultList: [...state.resultList].reverse(),
    }))
  }

  sortFunc = (typeSortBy) => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      resultList: [...state.resultList].sort((a, b) => {
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
    // const { selectedValue, sortderGoods } = this.state;
    return (
      <div className="App">
        <h1>Lists of goods</h1>
        {
          this.state.clickedButton
            ? <GoodsList 
                selectedValue={this.state.selectedValue}
                filterByLength={this.filterByLength}
                resultList={this.state.resultList}
                resetFunc={this.resetFunc}
                sortFunc={this.sortFunc}
                reverseFunc={this.reverseFunc}
              />
            : <Start showData={this.showData} />
        }
      </div>
    )
  }
}

export default App;
