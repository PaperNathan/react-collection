import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import 

export default class Home extends Component {
    state = {
        projectList: [
            'movie-search',
            'sign-in'
        ]
    }

    render() {
        return (
            <div id="project-container">
                <div>Welcome to my React Playground</div>
                {this.state.projectList.map((e, i) => {
                    return (
                        <Link to={this.state.projectList[i]}>
                            <div className="project-box">
                                {this.state.projectList[i].split('-').join(' ')}
                            </div>
                        </Link>
                    )
                })}
            </div>
        );
    }
}
