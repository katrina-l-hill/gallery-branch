// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
// need to import the Header from the Header.js file.
import Header from './Header.js';
// need to import the Main from the Main.js file.
import Main from './Main.js';
// need to add back css file that was deleted when initially deleted everything in this file.
import './App.css';

// 2. Name/Declare the class component.
class Footer extends React.Component {
  // Define the class with a render method. The render method should return something.
  render() {
    return (
      <>
      <Header/>
      <Main/>  
        <footer>
          &copy; Code Fellows, 2022. Katrina Hill (Author).
        </footer>
      </>
    );
  }
}

// 3. Export the class.
export default Footer;

