import React from "react";
import reactDom from "react-dom";

class IslandInfo extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <li className="navItem">
                <p>Island information such as num of rows, columns, filled spaces</p>            
            </li>
        );
    }
}



export default IslandInfo;