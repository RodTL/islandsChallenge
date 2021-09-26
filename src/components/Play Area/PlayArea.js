import React from "react";
import reactDom from "react-dom";

import Cell from "./Cell";

/*
class PlayArea extends React.Component {


}
*/


function PlayArea(props){
    /*const cells = [        
        [{id:1, content: <Cell />}, {id:2, content: <Cell />}, {id:2, content: <Cell />}],       
        [{id:1, content: <Cell />}, {id:2, content: <Cell />}, {id:2, content: <Cell />}]       
    ]*/

    const cells = [];

    for(let i=0; i<props.rows; i++){
        const temp = [];
        for(let j=0; j<props.columns; j++){
            temp.push({id:`${i+1},${j+1}`, content:<Cell updateLandCount={props.updateLandCount}/>});
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


//item => item.content


export default PlayArea;