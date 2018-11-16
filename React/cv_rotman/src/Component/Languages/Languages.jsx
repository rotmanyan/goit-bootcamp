import React from 'react';
import './languages.css'

const Languages = () => (
    <div className="wrapperLanguages">
        <h2 className="titleLanguages">Languages skills</h2>
        <ul className="listLanguages">
            <li className="itemLanguages">
                <span className="langLanguages">English - </span>
                <span className="levelLanguages">intermediate</span>
                <p className="discriptionLanguages">I can be interviewed in this language</p>
            </li>
            <li className="itemLanguages">
                <span className="langLanguages">Russian - </span>
                <span className="levelLanguages">native</span>
                <p className="discriptionLanguages">I can be interviewed in this language</p>
            </li>
            <li className="itemLanguages">
                <span className="langLanguages">Ukrainian - </span>
                <span className="levelLanguages">native</span>
                <p className="discriptionLanguages">I can be interviewed in this language</p>
            </li>
        </ul>
    </div>
)

export default Languages;