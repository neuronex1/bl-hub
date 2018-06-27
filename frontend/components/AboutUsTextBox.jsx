'use strict';

import React from 'react';

const AboutUsTextBox = (props) => {
    const renderPositions = () => {
        return props.positions ? props.positions.map(position => {
            return (
                <p key={position}>{position}</p>
            );
        }) : null;
    }

    const style = {
        backgroundImage: 'url(\'' + props.imgSrc + '\') ',
    };

    const getBlurb = (blurb) => {
        return {__html: blurb};
    };

    return (
        <tr key={props.title}>
            <td className='about-us__section'>
                <div className='about-us__img-container'
                    style={style}
                />
            </td>
            <td className='about-us__section'>
                <div className='about-us__text-wrapper'>
                    <p className='mbs mtm'><b>{props.title}</b></p>
                    {renderPositions()}
                    <p className='mtm'
                        dangerouslySetInnerHTML={getBlurb(props.blurb)}></p>
                </div>
            </td>
        </tr>
    );
}

export default AboutUsTextBox;
