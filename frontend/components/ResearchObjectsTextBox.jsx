'use strict';

import React from 'react';

const ResearchObjectsTextBox = (props) => {

    const style = {
        backgroundImage: 'url(\'' + props.imgSrc + '\') ',
    };

    const getAbstract = (abstract) => {
        return {__html: abstract};
    };

    return (
        <tr key={props.title}>
            <td className='research-objects__section'>
                <div className='research-objects__img-container'
                    style={style}
                />
            </td>
            <td className='research-objects__section'>
                <div className='research-objects__text-wrapper'>
                    <p className='mbs mtm'><b>{props.title}</b></p>
                    <p className='mbs mtm'>{props.authors}</p>
                    <p className='mtm'
                        dangerouslySetInnerHTML={getAbstract(props.abstract)}></p>
                </div>
            </td>
        </tr>
    );
}

export default ResearchObjectsTextBox;
