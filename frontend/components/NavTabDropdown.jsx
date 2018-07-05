import React from 'react';

class NavTabDropdown extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderOptions() {
        if (!this.props.options) {
            return null;
        }

        return this.props.options.map((tab, idx) => {
            let className = 'bl-dropdown__item ' + (tab.extraClass ? tab.extraClass : '');

            return (
                <a href={tab.link} key={idx} target={tab.linkTarget}>
                    <li className={className}>
                        {tab.title}
                    </li>
                </a>
            );
        });
    }

    render() {
        let className = 'bl-nav-tab';
        if (this.props.isActive) {
            className += ' active';
        }

        return (
            <ul className='bl-dropdown__wrapper'>
                <li className={className}>
                    {this.props.title}
                </li>
                <ul className='bl-dropdown'>
                    {this.renderOptions()}
                </ul>
            </ul>
        );
    }
}

export default NavTabDropdown;
