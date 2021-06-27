import React from 'react';
import HornedBeast from './HornedBeast'
import data from './Data/data.json'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      importData: []
    }
this.componentDidMount = () => {
  this.setState({
    importData: data
  })
}
  
  }
  render(){
    console.log(this.state.importData);
    return(
      <>
        <HornedBeast beast={this.state.importData}/>
      </>
    )
  }
}

export default Main;