import React from 'react';

import './App.css';
import NavBar from './components/Navigation Bar/nav-bar';
import PlayArea from './components/Play Area/PlayArea';
import './index.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      rows: 5,
      columns: 5,
      landCount: 0
    }
    this.increaseRows = this.increaseRows.bind(this);
    this.decreaseRows = this.decreaseRows.bind(this);
    this.setRows = this.setRows.bind(this);
    this.increaseColumns = this.increaseColumns.bind(this);
    this.decreaseColumns = this.decreaseColumns.bind(this);
    this.setColumns = this.setColumns.bind(this);
    this.updateLandCount = this.updateLandCount.bind(this);
  }

  

  //handler methods
  increaseRows(){
    if (this.state.rows < 10) {
      this.setState((prevState) => ({
        rows: parseInt(prevState.rows) + 1
      }));
    }
  }

  decreaseRows(){
    if (this.state.rows>1){
      this.setState((prevState) => ({
          rows: parseInt(prevState.rows) - 1,
      }));
    }
  }

  setRows(event){
    if (event.target.value>=1 && event.target.value<11){
      this.setState({rows: event.target.value});
    } else {
      this.setState((prevState) => ({
        rows: prevState.rows
      }));
    }
  }

  increaseColumns(){
    if (this.state.columns < 10) {
      this.setState((prevState) => ({
          columns: parseInt(prevState.columns) + 1
      }));
    }
  }

  decreaseColumns(){
    if (this.state.columns>1){
      this.setState((prevState) => ({
          columns: parseInt(prevState.columns) - 1
      }));
    }
  }

  setColumns(event){
    if (event.target.value>=1 && event.target.value<11){
      this.setState({columns: event.target.value});
    } else {
      this.setState((prevState) => ({
        columns: prevState.columns
      }));
    }
  }

  updateLandCount(updwn){
    if (updwn === true){
      this.setState((prevState) => ({
        landCount: parseInt(prevState.landCount) + 1
      }));
    }else{
      this.setState((prevState) => ({
        landCount: parseInt(prevState.landCount) - 1
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar increaseRows={this.increaseRows} decreaseRows={this.decreaseRows} setRows={this.setRows} increaseColumns={this.increaseColumns} decreaseColumns={this.decreaseColumns} setColumns={this.setColumns} rows={this.state.rows} columns={this.state.columns} landCount={this.state.landCount}/>
        <PlayArea rows={this.state.rows} columns={this.state.columns} updateLandCount={this.updateLandCount} />
      </div>
    );
  }
}



export default App;
