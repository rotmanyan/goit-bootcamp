import React from 'react';
import './translate.css'

// import USA from '../../Apperance/img/ukFlag.svg'
// import RUS from '../../Apperance/img/norwayFlag.svg';

const Translate = ({flagUsa, flagRus, changeLang}) => (
    <div className='wrapperTranslate'>
        <span className="flagUsa" onClick={changeLang}>English</span>
        /
        <span className="flagRus" onClick={changeLang}>Русский</span>
        {/*{flagUsa} {flagRus}*/}
    </div>
)

export default Translate;