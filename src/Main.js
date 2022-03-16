// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';

import HornedBeast from './HornedBeast.js';

import data from './data.json';
console.log(data);
// 2. Name/Declare the class component.
class Main extends React.Component {
    // Define the class with a render method. The render method should return something.
    render() {
        return (
            <main>
                <title>Gallery of Horns</title>
                <HornedBeast 
                title="Sparky" 
                imageUrl="./beardedDragon.jpeg" 
                description="Sparky is small and ferocious."
                />
                <HornedBeast 
                title="Buffy"
                imageUrl="./blackRhino.jpeg"
                description="Buffy is big and majestic."
                />
            </main>
        );
    }
}

// 3. Export the class.
export default Main;