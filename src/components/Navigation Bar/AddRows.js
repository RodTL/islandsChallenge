import React from "react";
import reactDom from "react-dom";

import addBtn from '../../media/plus.png';
import removeBtn from '../../media/less.png';
import '../../index.css';

function AddRows(props) {
    return(
        <li className="navItem">
            <p>Rows</p>
            <div className="gridControls">
                <input type="image" src={removeBtn} onClick={props.decreaseRows} />
                <input type="number" value={props.rows} onInputCapture={props.setRows} />
                <input type="image" src={addBtn} onClick={props.increaseRows} />
            </div>
        </li>
    );
}

export default AddRows;