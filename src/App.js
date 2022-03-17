// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
// need to import the Header from the Header.js file.
import Header from './Header.js';
// need to import the Main from the Main.js file.
import Main from './Main.js';
// / need to import the Footer from the Footer.js file.
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';

// need to add back css file that was deleted when initially deleted everything in this file.
import './App.css';
import data from './data.json';

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
      showModal: false
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
  render() {
    return (
      <>
        <Header />
        <Main
          selectBeast={this.selectBeast}
          data={data}
          openModal={this.openModal}
        />
        <Footer />
        <SelectedBeast 
        showModal={this.state.showModal}
        onHideClick={this.hideModal}
        title={this.state.selectedBeast.title}
        imageUrl={this.state.selectedBeast.imageUrl}
        description={this.state.selectedBeast.description}/>
      </>
    );
  }
}

// 3. Export the class.
export default App;
