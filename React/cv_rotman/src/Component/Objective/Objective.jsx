import React from 'react';
import './objective.css'

const Objective = () => (
    <div className="wrapperObjective">
        <h2 className="surnameObjective">Shvachko Vladymyr</h2>
        <h3 className="devObjective">JavaScript Front-end Developer</h3>
        <ul className="linksObjective">
            <li className="linkObjective">
                <span className="nameObjective">Location:</span>
                <span className="decsObjective">Kiev</span>
            </li>
            <li className="linkObjective">
                <span className="nameObjective">Phone number(s):</span>
                <span className="decsObjective">+38 (099) 44 25 999</span>
            </li>
            <li className="linkObjective">
                <span className="nameObjective">E-mail:</span>
                <span className="decsObjective">rotman.yan@gmail.com</span>
            </li>
            <li className="linkObjective">
                <span className="nameObjective">Linkedin:</span>
                <a href='https://www.linkedin.com/in/vladymyr-shvachko-102808167'
                   className="decsObjective">vladymyr-shvachko-102808167</a>
            </li>
            <li className="linkObjective">
                <span className="nameObjective">GitHub:</span>
                <a href='https://github.com/rotmanyan' className="decsObjective">rotmanyan</a>
            </li>
        </ul>
        <h2 className="titleObjective">Objective</h2>
        <p className="descriptionObjective">
            I want to be a superhero in React JS. Find an interesting job with interesting assignments and projects.
            Rise to the senior in the next year.
        </p>
        <p className="descriptionObjective">
            I want to learn new programming languages, improve my skills and motivate others to do the same.
        </p>
    </div>
)

export default Objective;