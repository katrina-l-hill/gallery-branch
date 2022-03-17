// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
// import App from './App.js';
import './Main.css';

import Modal from 'react-bootstrap/Modal';
// 2. Name/Declare the class component.
class SelectedBeast extends React.Component {
    // Define the class with a render method. The render method should return something.
    constructor(props) {
        super(props);  
      }

      hideModalTest = () =>{
        console.log("hiding");
      }
    
    render() {
        return (
            <Modal
            show={this.props.showModal}
            onHide={this.props.onHideClick}>
            <Modal.Header closeButton>            
            <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={this.props.imageUrl} />
                <p>{this.props.description}</p>
            </Modal.Body>
          </Modal>
        );
    }
}

// 3. Export the class.
export default SelectedBeast;