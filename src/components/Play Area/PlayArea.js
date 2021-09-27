import React from 'react';
import reactDom from "react-dom";

import Cell from './Cell';
import sea from '../../media/sea8bit.gif'
import land from '../../media/land.png'


function PlayArea(props){

    const cells = [];

    for(let i=0; i<props.rows; i++){
        const temp = [];
        for(let j=0; j<props.columns; j++){
            temp.push({id:`${i+1},${j+1}`, terrain: sea, content:<Cell id={`C${i+1}${j+1}`} updateLandCount={props.updateLandCount}/>});
        }
        cells.push(temp);
    }

    

    /*const totalLands = 0;
        
        for(let i=0; i<props.rows; i++){
            for(let j=0; j<props.columns; j++){
                if(this[`C${i+1}${j+1}`].current.includes('land') === true){
                    totalLands= totalLands + 1;
                }
            }
        }*/
        
   
    
    //console.log(this.refs[C11].current);
    /*
    const newCells = cells.map(rows => (rows.map((item) => ({id: item.id, terrain: item.terrain}))) );
    const newTotalLands = newCells.flat().filter(l => l.terrain == sea).length;
    console.log(newTotalLands);

    for (let i=0; i<newLands; i++){
        props.updateLandCount(true);
    }
    //props.updateCells(newLands);     
    */
    
    return(
        <div className="playArea">
            <table className="playArea-grid">
                <tbody>
                    {cells.length > 0 ? cells.map(rows => <tr> {rows.map(item => item.content)} </tr> ) : []}
                </tbody>
            </table>
        </div>
    );
}

/*
class PlayArea extends React.Component{
    constructor(){
        super();
        this.state ={
            virtualLands: 0
        }
        this.virtualLandUpdate = this.virtualLandUpdate.bind(this);
    }

    virtualLandUpdate(updwn){
        console.log(this.state.virtualLands);
        if (updwn === true){
            this.setState((prevState) => ({
              virtualLands: parseInt(prevState.virtualLands) + 1
            }));
          }else if (updwn === false){
            this.setState((prevState) => ({
                virtualLands: parseInt(prevState.virtualLands) - 1
            }));
          }
        
        this.props.updateLandCount("st", this.virtualLands);
    }
    
    render(){
        const cells = [];

        for(let i=0; i<this.props.rows; i++){
            const temp = [];
            for(let j=0; j<this.props.columns; j++){
                temp.push({id:`${i+1},${j+1}`, terrain: sea, content:<Cell virtualLandUpdate={this.virtualLandUpdate} updateLandCount={this.props.updateLandCount}/>});
            }
            cells.push(temp);
        }
        return(
            <div className="playArea">
                <table className="playArea-grid">
                    <tbody>
                        {cells.length > 0 ? cells.map(rows => <tr> {rows.map(item => item.content)} </tr> ) : []}
                    </tbody>
                </table>
            </div>
        );
    }
}
*/


//item => item.content


export default PlayArea;