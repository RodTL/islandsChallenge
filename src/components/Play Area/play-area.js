import React from "react";
import reactDom from "react-dom";

import Cell from "./Cell";


function PlayArea() {
    return (
        <div className="playArea">
            <table className="playArea-grid">
                <tbody>
                    <tr>
                        <Cell />
                        <Cell />
                        <Cell />
                    </tr>
                    <tr>
                        <Cell />
                        <Cell />
                        <Cell />
                    </tr>
                </tbody>
            </table>
            {/*<img src={sea}/>*/}
        </div>
    );
}

export default PlayArea;