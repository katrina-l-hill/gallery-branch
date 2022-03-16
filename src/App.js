// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
// need to import the Header from the Header.js file.
import Header from './Header.js';
// need to import the Main from the Main.js file.
import Main from './Main.js';
// / need to import the Footer from the Footer.js file.
import Footer from './Footer.js';
// need to add back css file that was deleted when initially deleted everything in this file.
import './App.css';
import data from './data.json';

// 2. Name/Declare the class component.
class App extends React.Component {
  // Define the class with a render method. The render method should return something.
  render() {
    return (
      <>
        <Header />
        <Main 
          data={data}
        />
        <Footer />
      </>
    );
  }
}

// 3. Export the class.
export default App;