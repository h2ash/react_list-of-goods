import React from 'react';
import Start from './components/Start'
import GoodsList from './components/GoodsList'


import goodsFromServer from './api/Goods'

class App extends React.Component {
  state = {
    goods: [],
    sortderGoods: [],
    clickedButton: false,
  }

  showData = () => {
    this.setState({
      clickedButton: true,
      goods: goodsFromServer,
      sortderGoods: goodsFromServer,
    })
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
      sortderGoods: [...state.sortderGoods].sort((a, b) => {
        switch(typeSortBy) {
          case 'alphabetically':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
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
