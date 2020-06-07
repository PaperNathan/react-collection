import React, { Component } from 'react';

import Button from '../../../layout/Button';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.changeInformationHandler = this.changeInformationHandler.bind(this);
        
        this.state = {
            username: '',
            password: ''
        }
    }

    changeInformationHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="si-form-container">
                <form className="si-form">

                    <input type="text" 
                           name="username"
                           value={this.state.username}
                           placeholder="Username"
                           onChange={this.changeInformationHandler}></input>

                    <input type="password" 
                           name="password"
                           value={this.state.password}
                           placeholder="Password"
                           onChange={this.changeInformationHandler}></input>

                    <Button handleClick={this.handleClick} text="Submit" />

                </form>
            </div>
        );
    }
}
