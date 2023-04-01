import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from 'cleave.js/react';

class MyComponent extends React.Component {
    onChange(event) {
        console.log('Formatted Pretty Value ::', event.target.value);
        console.log('Raw Value ::', event.target.rawValue);
    }

    render() {
        return (
            <Cleave placeholder="Enter your credit card number"
                options={{ creditCard: true }}
                onChange={this.onChange.bind(this)} />
        );
    }
}