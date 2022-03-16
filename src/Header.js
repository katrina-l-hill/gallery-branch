// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';

import './Header.css';

// 2. Name/Declare the class component.
class Header extends React.Component {
    // Define the class with a render method. The render method should return something.
    render() {
      return (
        <header>
          <h1>Gallery of Horns</h1>
        </header>
      )
    }
}

// 3. Export the class.
export default Header;