import React from "react";
import reactDom from "react-dom";

import IslandInfo from "./IslandInfo";
import AddColumns from "./AddColumns";
import AddRows from "./AddRows";
import About from "./About";

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <nav className="navBar">
                <div className="logo">place logo here</div>
                <ul className="navBar-nav">
                    <IslandInfo />
                    <AddColumns />
                    <AddRows />
                    <About />
                    
                    
                    {/*
                    <li className="navItem">
                        
                    </li>
                    */}
                </ul>
            </nav>
        );
    }
}



export default NavBar;