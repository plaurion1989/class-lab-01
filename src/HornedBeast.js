/* eslint-disable */
import React from 'react';
import {Card, Button, CardColumns} from 'react-bootstrap'



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    }
  }
  incrementClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
  render() {
    let imageStyle = {
      maxWidth: 250
    }
    return (
      <>
        <Card>
          <CardColumns>
            {this.props.beast ? this.props.beast.map(beast => (
              <Card.Body>
                <Card.Title>{beast.title}</Card.Title>
                <Card.Img src={beast.image_url} alt={beast.name} style={imageStyle} />
                <Card.Text>{beast.description}</Card.Text>
                <Card.Footer>
                  <Button onClick={this.incrementClick}>Click Counter</Button><p>{this.state.clicks} Likes</p>
                </Card.Footer>
              </Card.Body>
            )) : ''};
          </CardColumns>
        </Card>
      </>
    );
  }
}

export default HornedBeast;