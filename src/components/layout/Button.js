import React from 'react';

export default class Button extends React.Component {
    render() {
        return(
            <button className="btn-standard" onClick={this.props.handleClick}>{this.props.text}</button>
        )
    }
}
