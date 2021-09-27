import React from 'react';

import './App.css';
import NavBar from './components/Navigation Bar/nav-bar';
import PlayArea from './components/Play Area/PlayArea';
import './index.css';
import sea from './media/sea8bit.gif'
import land from './media/land.png'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      rows: 3,
      columns: 3,
      landCount: 0,
      islandCount: 0
    }
    this.increaseRows = this.increaseRows.bind(this);
    this.decreaseRows = this.decreaseRows.bind(this);
    this.setRows = this.setRows.bind(this);
    this.increaseColumns = this.increaseColumns.bind(this);
    this.decreaseColumns = this.decreaseColumns.bind(this);
    this.setColumns = this.setColumns.bind(this);
    this.updateLandCount = this.updateLandCount.bind(this);
    //this.updateIsandCount = this.updateIsandCount.bind(this);
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
        rows: parseInt(prevState.rows) - 1          
      }));
      console.log("Aquí debo recontar las lands");
    }
  }

  setRows(event){
    if (event.target.value>=1 && event.target.value<11){
      this.setState({rows: event.target.value});
    } else {
      this.setState((prevState) => ({
        rows: prevState.rows
      }));
      alert("The max number of rows is 10");
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
      console.log("Aquí debo recontar las lands");
    }
  }

  setColumns(event){
    if (event.target.value>=1 && event.target.value<11){
      this.setState({columns: event.target.value});
    } else {
      this.setState((prevState) => ({
        columns: prevState.columns
      }));
      alert("The max number of columns is 10");
    }
  }
  
  updateLandCount(updwn){
    if (updwn === true){
      this.setState((prevState) => ({
        landCount: parseInt(prevState.landCount) + 1
      }));
    }else if (updwn === false){
      this.setState((prevState) => ({
        landCount: parseInt(prevState.landCount) - 1
      }));
    }
  }
  
  /*
  updateIslandCount(updwn){
    if (updwn === true){
      this.setState((prevState) => ({
        islandCount: parseInt(prevState.islandCount) + 1
      }));
    }else if (updwn === false){
      this.setState((prevState) => ({
        islandCount: parseInt(prevState.islandCount) - 1
      }));
    }
  }*/

  render() {
    return (
      <div className="App">
        <NavBar increaseRows={this.increaseRows} decreaseRows={this.decreaseRows} setRows={this.setRows} increaseColumns={this.increaseColumns} decreaseColumns={this.decreaseColumns} setColumns={this.setColumns} rows={this.state.rows} columns={this.state.columns} landCount={this.state.landCount}/>
        <PlayArea rows={this.state.rows} columns={this.state.columns} landCount={this.state.landCount} updateLandCount={this.updateLandCount}/>
      </div>
    );
  }
}



export default App;
