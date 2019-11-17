import React from 'react';

import './Heading.css';

export default class Heading extends React.Component {
    render() {
        return (
            <div className="title-box">
                <h4>{this.props.text}</h4>
            </div>
        )
    }
};