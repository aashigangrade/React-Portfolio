import React, {Component} from 'react';
import Background from './img/bg-masthead.jpg';
import './Header.css';

const mystyles  = {
    'backgroundImage': `url(${Background})`,
    'backgroundSize': "cover",
};

class Header extends Component{
     
    render(){
        return(
            <header style={mystyles}>
                <h1>{this.props.title}</h1>
                <p>I am very happy that I made it on my own.</p>
                <a href = "#ex" className = "btn">Learn More</a>
            </header>
        );
    }
}

export default Header;