import React from 'react';

import './App.css';
import NavBar from './components/Navigation Bar/nav-bar';
import PlayArea from './components/Play Area/play-area';


import './index.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      rows: 3,
      columns: 4
    }
    this.increaseRows = this.increaseRows.bind(this);
    this.decreaseRows = this.decreaseRows.bind(this);
    this.increaseColumns = this.increaseColumns.bind(this);
    this.decreaseColumns = this.decreaseColumns.bind(this);
  }

  //handler methods
  increaseRows(){
    if (this.state.rows < 10) {
      this.setState((prevState) => ({
          rows: prevState.rows + 1
      }));
    }
  }

  decreaseRows(){
    if (this.state.rows>1){
      this.setState((prevState) => ({
          rows: prevState.rows - 1
      }));
    }
  }

  setRows(){

  }

  increaseColumns(){
    if (this.state.columns < 10) {
      this.setState((prevState) => ({
          columns: prevState.columns + 1
      }));
    }
  }

  decreaseColumns(){
    if (this.state.columns>1){
      this.setState((prevState) => ({
          columns: prevState.columns - 1
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar increaseRows={this.increaseRows} decreaseRows={this.decreaseRows} increaseColumns={this.increaseColumns} decreaseColumns={this.decreaseColumns} rows={this.state.rows} columns={this.state.columns} />
        <PlayArea rows={this.state.rows} columns={this.state.columns} />
      </div>
    );
  }
}



export default App;
