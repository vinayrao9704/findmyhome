import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/navBar'

export default class App extends Component {

    state = {

    }


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                </div>
            </BrowserRouter>

        )













    }
};