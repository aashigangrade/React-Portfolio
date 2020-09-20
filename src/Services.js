import React, {Component} from 'react';
import './Services.css';

class Services extends Component{
    render(){
        return (
            <div className = "services">
            <h3>Our Services</h3>
            <h2>What We Offer</h2>    
            
            <div className = "row">
                <div>
                    <span><i className="fas fa-mobile-alt"></i></span>
                    <h4>Responsive</h4>
                    <p>Looks great on any screen size!</p>
                </div>
                <div>
                <span><i className="fas fa-pencil-alt"></i></span>
                <h4>Responsive</h4>
                    <p>Looks great on any screen size!</p>
                </div>
                <div>
                <span><i className="far fa-thumbs-up"></i></span>
                <h4>Responsive</h4>
                    <p>Looks great on any screen size!</p>
                </div>
                <div>
                <span><i className="fas fa-question"></i></span>
                <h4>Responsive</h4>
                    <p>Looks great on any screen size!

</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Services;