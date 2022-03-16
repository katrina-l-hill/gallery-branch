// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';

import './HornedBeast.css';

// 2. Name/Declare the class component.
class HornedBeast extends React.Component {
    // Define the class with a render method. The render method should return something.
    // add a state to be able to change a component
    constructor(props) {
        super(props);
        this.state = {
            favorited: 0
        }
    }
    handleImageClick = () => {
        console.log("clicked");
        this.setState({
            favorited: this.state.favorited + 1
        });
    }

    render() {
        // console.log(this.props.name);
        return (
            <article>
                {/* <title>Gallery of Horns</title> */}
                <h2>{this.props.title}</h2>
                {/* <p>{this.props.description}</p> */}
                <p>{} favorite</p>
                <p>number of clicks: {this.state.favorited}</p>
                <img onClick={this.handleImageClick}
                    src={this.props.imageUrl}
                    alt={this.props.title}
                    title={this.props.description}
                />
            </article>
        )
    }
}

// 3. Export the class.
export default HornedBeast;