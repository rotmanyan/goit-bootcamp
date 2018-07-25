import React from 'react';

const SubMenu = () => {
    return (
        <ul className='sub-menu'>
            {sub.map(el => <li className='sub-menu__item' key={`${el.parentKey}${el.text}`}>
                <a href={el.link} className="sub-menu__link">{el.text}</a>
            </li>)}
        </ul>
    )
};

export default SubMenu;