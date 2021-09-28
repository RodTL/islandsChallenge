import React from 'react';

import sea from '../../media/sea8bit.gif'
import land from '../../media/land.png'


/*In order to keep track of other <Cell /> elements for islandCount, I need to 
lift up the states and methods here to playArea.js and make playArea a class component, 
the issue is that it would only work if Cell would be rendered just 1 time*/

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          terrain: sea
        }
        this.toggleTerrain = this.toggleTerrain.bind(this);

      }

      componentWillUnmount(){
        if(this.state.terrain === land){
          this.props.updateLandCount(false);
          this.setState({ terrain: sea });
        }
      }

      /*componentDidMount(){
        this.props.updateCmap();
      }*/

      toggleTerrain(){
        if (this.state.terrain === sea){
            this.props.updateLandCount(true);
            this.setState({ terrain: land });
        }else if (this.state.terrain === land){
            this.props.updateLandCount(false);
            this.setState({ terrain: sea });
        }
        
      }

      render(){
          return(
              <td>                              
                <div onClick={this.toggleTerrain} style={{backgroundImage: `url(${this.state.terrain})` }}></div>                            
              </td>
          );
      }
}

export default Cell;