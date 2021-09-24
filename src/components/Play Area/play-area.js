import React from "react";
import reactDom from "react-dom";
import sea from '../../media/sea8bit.gif'

function PlayArea() {
    return (
        <div className="playArea">
            <img src={sea}/>
        </div>
    );
}

export default PlayArea;