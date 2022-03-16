// There are 3 basic parts to a React component.
// 1. Start by creating a class component. Always start by importing React.
import React from 'react';
import { Card } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

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
                <Card border="primary" style={{width: '5rem'}}>
                    <Card.Body>
                <p>{} 💚 favorite</p>
                <p>number of clicks: {this.state.favorited}</p>
                </Card.Body>
                </Card>
                
                
                <img onClick={this.handleImageClick}
                    src={this.props.imageUrl}
                    alt={this.props.title}
                    title={this.props.description}
                    
                
                />
                {/* <Button className="article-button">Button 1</Button>
                <Button className="article-button">Button 2</Button> */}
                <p>Click on image if it's your favorite</p>
            </article>
        )
    }
}

// 3. Export the class.
export default HornedBeast;