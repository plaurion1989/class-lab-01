/*eslint-disable*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';

class SelectedModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal show={this.props.modalNow}>
          <Modal.Title>{this.props.title}</Modal.Title>
          <Modal.Body>
            <img src={this.props.src} alt={this.props.keyword} title={this.props.title} style={{ width: '100%' }} />
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedModal;