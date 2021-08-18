/* eslint-disable */
import React from 'react';
import { Card, Button } from 'react-bootstrap'
import SelectedBeast from './SelectedBeast.js'



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      clicks: 0
    }
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  closeModal = () => {
    this.setState({ 
      showModal: false 
    })
  }

  incrementClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.src} alt={this.props.alt} title={this.props.title} />
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{`This has ${this.state.count} likes`}</Card.Text>
    <Button onClick={this.incrementClick} >Like Me!{this.state.clicks === 0 ? '' : this.state.clicks}</Button>
          <Button onClick={this.toggleModal} >Close-Up!</Button>
        </Card>
          <SelectedBeast
            modalNow={this.state.showModal}
            closeModal={this.closeModal}
            title={this.props.title}
            src={this.props.src}
            description={this.props.description}
          />
      </>
    );
  }
}


export default HornedBeast;