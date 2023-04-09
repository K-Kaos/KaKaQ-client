import React from "react";
import { Link } from 'react-router-dom';

function OpenSurveyItem(props) {
    return (
      <div>
        <li className='surveys_item'>
            <Link className='surveys__item__link' to={props.path}>
                <figure className='surveys__item__pic-wrap' data-category={props.label}>
                    <img
                        className='surveys__item__img'
                        alt='Survey Image'
                        src={props.src}
                    />
                </figure>
                <div className='surveys__item__info'>
                    <h5 className="surveys__item__text">{props.text}</h5>
                </div>
            </Link>
        </li>
      </div>  
    );
}

export default OpenSurveyItem;