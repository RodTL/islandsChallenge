import React from "react";
import reactDom from "react-dom";

function IslandInfo(props){
    return(
        <li className="navItem">
            <p>Grid size: <br/>          
              {props.rows} rows <br/>           
              {props.columns} columns <br/> <br/>           
              And a total of {props.rows*props.columns} cells from which {props.landCount} are filled</p>           
        </li>
    );
}

export default IslandInfo;