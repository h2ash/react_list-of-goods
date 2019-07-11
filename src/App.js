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

  showData = () => { //or LoadButton in different tasks
    this.setState({
      clickedButton: true,
      goods: goodsFromServer,
      resultList: goodsFromServer,
    })
  }

  filterByLength = (event) => {
    const {value} = event.target;
    this.setState(prevState => ({
      selectedValue: value,
      resultList: [...prevState.goods].filter(goodsItem => goodsItem.length >= value),
    }))
  }

  resetFunc = () => {
    this.setState(prevState => ({
      resultList: [...prevState.goods],
      selectedValue: 1,
    }))
  }

  reverseFunc = () => {
    this.setState(prevState => ({
      resultList: [...prevState.resultList].reverse(),
    }))
  }

  sortFunc = (typeSortBy) => {
    this.setState(prevState => ({
      direction: prevState.direction === 1 ? -1 : 1,
      resultList: [...prevState.resultList].sort((a, b) => {
        switch(typeSortBy) {
          case 'alphabetically':
            return a.localeCompare(b) * prevState.direction;
          case 'length':
            return (a.length - b.length) * prevState.direction;
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
