import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal
          open={this.props.open}
          onClick={this.closeModal}
          onClose={this.props.close}
          center
        >
          <h2>{this.props.message}</h2>
        </Modal>
      </div>
    );
  }
}