import React from 'react';
import HornedBeast from './HornedBeast';
import {CardColumns} from 'react-bootstrap';



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showModal: false
    }
    this.componentDidMount = () => {
      this.setState({
        data: this.props.importData
      })
    }
 
  }
  render() {
    return (
      <> 
      
      <CardColumns>
      {this.state.data.map(beast => {
        return <HornedBeast
          src={beast.image_url}
          title={beast.title}
          alt={beast.keyword}
          description={beast.description}
          showModal={this.state.showModal}
          />
      })}
      </CardColumns>
      </>
    )
  }
}

export default Main;