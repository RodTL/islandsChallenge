import React from "react";
import reactDom from "react-dom";

import AddColumns from "./AddColumns";
import AddRows from "./AddRows";
import IslandInfo from "./IslandInfo";
import About from "./About";
import '../../index.css';

function NavBar(props) {
    return(
        <nav className="navBar">
            <div className="logo">The island Challenge</div>
            <ul className="navBar-nav">
                <AddColumns increaseColumns={props.increaseColumns} decreaseColumns={props.decreaseColumns} setColumns={props.setColumns} columns={props.columns} />
                <AddRows increaseRows={props.increaseRows} decreaseRows={props.decreaseRows} setRows={props.setRows} rows={props.rows} />
                <IslandInfo rows={props.rows} columns={props.columns} landCount={props.landCount}/>
                <About />
            </ul>
        </nav>
    );
}

export default NavBar;