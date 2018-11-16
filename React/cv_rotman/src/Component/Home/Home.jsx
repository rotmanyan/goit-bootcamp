import React from 'react';
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => (
    <div className='wrapperHome'>
        <h1 className="titleHome">Welcome!</h1>
        <p className="descriptionHome">It's application CV - Shvachko Vladymyr!</p>
        <div className="routerHome">
            <Link className='buttonHome' to='/objective'>Objective</Link>
            <Link className='buttonHome' to='/skills'>Skills</Link>
            <Link className='buttonHome' to='/projects'>Projects</Link>
            <Link className='buttonHome' to='/experience'>Experience</Link>
            <Link className='buttonHome' to='/education'>Education</Link>
            <Link className='buttonHome' to='/traineeship'>Traineeship</Link>
            <Link className='buttonHome' to='/languages'>Languages</Link>
        </div>
    </div>
)

export default Home;