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
      //cells: [[{id:"1,1", terrain: sea}, {id:"1,2", terrain: sea}, {id:"1,3", terrain: sea}],[{id:"2,1", terrain: sea}, {id:"2,2", terrain: sea}, {id:"2,3", terrain: sea}],[{id:"3,1", terrain: sea}, {id:"3,2", terrain: sea}, {id:"3,3", terrain: sea}]],
      landCount: 0,
      islandCount: 0
    }
    this.increaseRows = this.increaseRows.bind(this);
    this.decreaseRows = this.decreaseRows.bind(this);
    this.setRows = this.setRows.bind(this);
    this.increaseColumns = this.increaseColumns.bind(this);
    this.decreaseColumns = this.decreaseColumns.bind(this);
    this.setColumns = this.setColumns.bind(this);
    this.updateCells = this.updateCells.bind(this);
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
      //aquí regresar toda la última row a sea
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
    }
  }

  updateCells(newCells){
    const newLands = newCells.flat().filter(l => l.terrain == land).length;
    //this.setState({landCount: newLands});
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

  render() {
    return (
      <div className="App">
        <NavBar increaseRows={this.increaseRows} decreaseRows={this.decreaseRows} setRows={this.setRows} increaseColumns={this.increaseColumns} decreaseColumns={this.decreaseColumns} setColumns={this.setColumns} rows={this.state.rows} columns={this.state.columns} landCount={this.state.landCount}/>
        <PlayArea rows={this.state.rows} columns={this.state.columns} updateCells={this.updateCells} landCount={this.state.landCount} updateLandCount={this.updateLandCount} />
      </div>
    );
  }
}



export default App;
