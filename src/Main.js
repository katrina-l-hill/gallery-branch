// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';

import HornedBeast from './HornedBeast.js';

import Footer from './Footer.js';

// 2. Name/Declare the class component.
class Main extends React.Component {
    // Define the class with a render method. The render method should return something.
    render() {
        return (
            <main>
                <HornedBeast 
                name="Sparky" 
                species="Bearded Dragon" 
                fleshColor="Green"
                />
                <HornedBeast 
                name="Buffy"
                species="Rhino"
                fleshColor="Black"
                />
            </main>
        );
    }
}

// 3. Export the class.
export default Main;