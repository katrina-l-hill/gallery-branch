// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';

// 2. Name/Declare the class component.
class Footer extends React.Component {
  // Define the class with a render method. The render method should return something.
  render() {
    return (
        <footer>
          &copy; Code Fellows, 2022. Katrina Hill (Author).
        </footer>
     );
  }
}

// 3. Export the class.
export default Footer;

