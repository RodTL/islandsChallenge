import React from 'react';

import sea from '../../media/sea8bit.gif'
import land from '../../media/land.png'

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          terrain: sea
        }
        this.toggleTerrain = this.toggleTerrain.bind(this);

        this[this.props.id] = React.createRef();

      }

      /*getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.id.startsWith(prevProps.rows) && prevState.terrain == land){
          this.props.updateLandCount(false);
          this.setState({ terrain: sea });
        }
      }*/

      componentWillUnmount(){
        if(this.state.terrain == land){
          this.props.updateLandCount(false);
          this.setState({ terrain: sea });
        }
      }

      toggleTerrain(){
        if (this.state.terrain == sea){
            this.props.updateLandCount(true);
            this.setState({ terrain: land });
        }else if (this.state.terrain == land){
            this.props.updateLandCount(false);
            this.setState({ terrain: sea });
        }
      }

      render(){
          return(
              <td>
                <img ref={this[this.props.id]} src={this.state.terrain} onClick={this.toggleTerrain} />
              </td>
          );
      }
}

export default Cell;