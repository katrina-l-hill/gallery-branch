// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';

// 2. Name/Declare the class component.
class HornedBeast extends React.Component {
    // Define the class with a render method. The render method should return something.
    render() {
        // console.log(this.props.name);
      return (
        <article>
        <title>Gallery of Horns</title>
          <h2>{this.props.Sparky}</h2>
          <p>Sparky is small and ferocious.</p>
          <img src='./beardedDragon.jpeg' alt='image of bearded dragon'></img>
          <h2>{this.props.Buffy}</h2>
          <p>Buffy is big and majestic.</p>
          <img src='./blackRhino.jpeg' alt='image of black rhino'></img>
        </article>
      )
    }
}

// 3. Export the class.
export default HornedBeast;