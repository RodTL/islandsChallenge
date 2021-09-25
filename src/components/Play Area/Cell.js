import React from "react";
import reactDom from "react-dom";

import sea from '../../media/sea8bit.gif'
import land from '../../media/land.png'

class Cell extends React.Component{
    constructor(){
        super();
        this.state = {
          terrain: sea
        }
        this.toggleTerrain = this.toggleTerrain.bind(this);
      }

      toggleTerrain(){
        if (this.state.terrain == sea){
            this.setState({ terrain: land });
        }else {
            this.setState({ terrain: sea });
        }
      }

      render(){
          return(
              <td><img src={this.state.terrain} onClick={this.toggleTerrain} /></td>
          );
      }
}

export default Cell;