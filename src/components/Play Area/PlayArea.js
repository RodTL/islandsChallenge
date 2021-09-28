import React from 'react';

import Cell from './Cell';
import sea from '../../media/sea8bit.gif'
import land from '../../media/land.png'

/*
function PlayArea(props){

    const cells = [];

    for(let i=0; i<props.rows; i++){
        const temp = [];
        for(let j=0; j<props.columns; j++){
            temp.push({id:`${i+1},${j+1}`, terrain: sea, content:<Cell rows={props.rows} id={`${i+1}${j+1}`} r={i+1} c={j+1} updateLandCount={props.updateLandCount}/>});
        }
        cells.push(temp);
    }
    
    return(
        <div className="playArea">
            <table className="playArea-grid">
                <tbody>
                    {cells.length > 0 ? cells.map(rows => <tr>{rows.map(item => item.content)}</tr> ) : []}
                </tbody>
            </table>
        </div>
    );
}
*/

class PlayArea extends React.Component{
    constructor(){
        super();
        this.state ={
            terrainMap: [{r:0, c:0, t:"s"}],
            rmap: 0,
            cmap: 0
        }
        this.updateTerrainMap = this.updateTerrainMap.bind(this);
        this.updateCmap = this.updateCmap.bind(this);
    }

    updateCmap(){
        this.setState((prevState) => ({
            cmap: parseInt(prevState.cmap) + 1
          }));
    }
    
    updateTerrainMap(newElement){
        this.setState({terrainMap: newElement});
    }

    
    render(){
        
        const cells = [];

        for(let i=0; i<this.props.rows; i++){
            const temp = [];
            for(let j=0; j<this.props.columns; j++){
                temp.push({id:`${i+1},${j+1}`, terrain: sea, content:<Cell terrainMap={this.state.terrainMap} updateCmap={this.updateCmap} rows={this.props.rows} id={`${i+1}${j+1}`} r={i+1} c={j+1} updateLandCount={this.props.updateLandCount}/>});               
            }
            cells.push(temp);
        }
        
        return(
            <div className="playArea">
                <table className="playArea-grid">
                    <tbody>
                        {cells.length > 0 ? cells.map(rows => <tr>{rows.map(item => item.content)}</tr> ) : []}
                    </tbody>
                </table>
            </div>
        );
    }
}



export default PlayArea;