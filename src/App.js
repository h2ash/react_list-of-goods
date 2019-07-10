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

  reverseFunc = () => {
    this.setState(state => ({
      sortderGoods: [...state.sortderGoods].reverse(),
    }))
  }

  // sortFunc = () => {
  //   this.setState(state => {
  //     sortderGoods: [...state.goods].sort((a, b) => {
  //       switch(typeSortBy) {
          
  //       }
  //     })
  //   })
  // }

  showData = () => {
    this.setState({
      clickedButton: true,
      goods: goodsFromServer,
      sortderGoods: goodsFromServer,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Lists of goods</h1>
        {
          this.state.clickedButton
            ? <GoodsList 
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
