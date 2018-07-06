'use strict'

import React from 'react';

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);

        this.getAnswer = this.getAnswer.bind(this);
        this.toggleAnswer = this.toggleAnswer.bind(this);

        this.state = {
            isVisible: false
        };
    }

    getAnswer() {
        return {__html: this.props.answer};
    }

    toggleAnswer() {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        let className = 'faq-item__answer--hidden';
        let icon = <i className='fa fa-caret fa-caret-right' aria-hidden='true'></i>;

        if (this.state.isVisible) {
            className = 'faq-item__answer';
            icon = <i className='fa fa-caret fa-caret-down' aria-hidden='true'></i>;
        }

        return (
            <div className='faq-item'>
                <div className='faq-item__question--wrapper'
                    onClick={this.toggleAnswer}>
                    {icon}
                    <p className='faq-item__question' ><b>{this.props.question}</b></p>
                </div>
                <p className={className}
                    dangerouslySetInnerHTML={this.getAnswer()}
                    >
                </p>
            </div>

        );
    }
}

export default Carousel;
