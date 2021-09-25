import React from "react";
import reactDom from "react-dom";

class About extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <li className="navItem">
                <p>This application was developed by Rodolfo Tamayo</p>               
            </li>
        );
    }
}



export default About;