// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

// 2. Name/Declare the class component.
class Main extends React.Component {
    // Define the class with a render method. The render method should return something.
    render() {
        let animals = [];
        if (this.props.filterHorns) {
            //filtering is required
            let numVal = parseInt(this.props.hornFilter);
            let filteredAnimals = this.props.data.filter(item => item.horns === numVal)
            filteredAnimals.forEach(beast => {
                animals.push(
                    <HornedBeast
                        selectBeast={this.props.selectBeast}
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                        horns={beast.horns}
                        keyword={beast.keyword}
                        openModal={this.props.openModal}
                    />
                )
            });
        }
        else {
            //no filtering required
            this.props.data.forEach(beast => {
                animals.push(
                    <HornedBeast
                        selectBeast={this.props.selectBeast}
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                        horns={beast.horns}
                        keyword={beast.keyword}
                        openModal={this.props.openModal}
                    />
                )
            });
        }
        return (
            <main>
                {animals}
            </main>
        );
    }
}

// 3. Export the class.
export default Main;