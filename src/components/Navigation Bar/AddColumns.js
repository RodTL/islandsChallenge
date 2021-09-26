import React from "react";
import reactDom from "react-dom";

import addBtn from '../../media/plus.png';
import removeBtn from '../../media/less.png';
import '../../index.css';

function AddColumns(props) {
    return(
        <li className="navItem">
            <p>Columns</p>
            <div className="gridControls">
                <input type="image" src={removeBtn} onClick={props.decreaseColumns} />
                <input type="number" value={props.columns} onInputCapture={props.setColumns} />
                <input type="image" src={addBtn} onClick={props.increaseColumns} />
            </div>
        </li>
    );
}

export default AddColumns;