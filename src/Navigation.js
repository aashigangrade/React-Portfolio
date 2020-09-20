import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component{
    render(){
        const sections = ["Home","About","Services","Portfolio","Contact"];
        const navlinks = sections.map(section => {
            return (
                <li> <a href = {'#' + section}>{section}</a></li>
            );
        });
        return(
            <nav>
                <h2 className = 'logo'><a href = "#">{this.props.logoTitle}</a></h2>

                <ul>
                    {navlinks}
                </ul>
            </nav>
            
        );
    }
}

export default Navigation;
