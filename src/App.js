// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import { Form, Button } from 'react-bootstrap';
// need to add back css file that was deleted when initially deleted everything in this file.
import './App.css';
import data from './data.json';
// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

// 2. Name/Declare the class component.
class App extends React.Component {
  // Define the class with a render method. The render method should return something.
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {
        title: '',
        imageUrl: '',
        description: ''
      },
      showModal: false,
      label: 'Filter Collection',
      hornFilterSelection: 0,     //corresponds to current selection
      hornFilter: 0,              //used to enforce filter in Main.js
      filterHorns: false          //used to toggle filter in Main.js
    };
  }
  hideModal = () => {
    this.setState({
      showModal: false
    });
  }
  openModal = () => {
    this.setState({
      showModal: true
    });
  }
  selectBeast = (beastInfo) => {
    this.setState({
      selectedBeast: beastInfo
    },
      // callback for after setState finishes executing
      () => {
        //show modal
        this.openModal();
      });
  }
  changeFilter = (evt) => {
    this.setState({
      hornFilterSelection: evt.target.value
    });
  }
  filterResults = (evt) => {
    evt.preventDefault();
    this.setState({
      filterHorns: true,
      hornFilter: this.state.hornFilterSelection
    });
  }

  render() {
    return (
      <>
        <Header>
        </Header>
        <Form onSubmit={this.filterResults}>
          <Form.Group>
            <Form.Label>{this.state.label}</Form.Label>
            <Form.Select name="selected" onChange={this.changeFilter}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        <Main
          selectBeast={this.selectBeast}
          data={data}
          openModal={this.openModal}
          filterHorns={this.state.filterHorns} //true or false to toggle filter
          hornFilter={this.state.hornFilter}   //current value to filter to
        />
        <Footer />
        <SelectedBeast
          test={() => { }}
          showModal={this.state.showModal}
          onHideClick={this.hideModal}
          title={this.state.selectedBeast.title}
          imageUrl={this.state.selectedBeast.imageUrl}
          description={this.state.selectedBeast.description} />
      </>
    );
  }
}

// 3. Export the class.
export default App;
