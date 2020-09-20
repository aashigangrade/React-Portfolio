import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Services from './Services';
import { render } from '@testing-library/react';


class App extends Component{
  render(){
    return(
      <div>
        <Navigation logoTitle = "Aashi's Portfolio" />
        <Header title = "Welcome to my First React Project"/>
        <Services/>
      </div>
    );
  }
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);


serviceWorker.unregister();
