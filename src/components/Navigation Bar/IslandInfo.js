import React from "react";
import reactDom from "react-dom";

function IslandInfo(props){
    return(
        <li className="navItem">
            <p>Grid size:</p>           
            <p>{props.rows} rows</p>           
            <p>{props.columns} columns</p>           
            <p>And a total of {props.rows*props.columns} cells</p>           
        </li>
    );
}

export default IslandInfo;