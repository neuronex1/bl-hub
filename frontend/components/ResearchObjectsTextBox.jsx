'use strict';

import React from 'react';

const ResearchObjectsTextBox = (props) => {

    const style = {
        backgroundImage: 'url(\'' + props.imgSrc + '\') ',
    };

    const getTitle = (title) => {
        return {__html: title};
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
                    <p className='mbs mtm text-bold'
                        dangerouslySetInnerHTML={getTitle(props.title)}></p>
                    <p className='mbs mtm'>{props.authors}</p>
                    <p className='mbs mtm'><i>{props.venue}</i></p>
                    <p className='mtm'
                        dangerouslySetInnerHTML={getAbstract(props.abstract)}></p>
                    <li><a class='text-s bl-link' href='mailto:bioluminescencehub@gmail.com?subject=Research-Object'>Request more information</a></li>
                </div>
            </td>
        </tr>
    );
}

export default ResearchObjectsTextBox;
