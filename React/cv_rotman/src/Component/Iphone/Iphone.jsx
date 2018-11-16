import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './iphone.css'

import Experience from '../Experience/Experience'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Objective from '../Objective/Objective'
import Education from '../Education/Education'
import Traineeship from '../Traineeship/Traineeship'
import Languages from '../Languages/Languages'
import Sleep from '../Sleep/Sleep'

export default class Iphone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            translate: true,
            lang: ''
        }
    }

    changeLang = () => {
        this.setState({
            translate: !this.state.translate
        })
    }

    // componentDidUpdate(prevProps, nextProps) {
    //     const a = this.state.translate === true ? 'en' : 'ru'
    //     if (nextProps !== prevProps) {
    //         this.setState({
    //             lang: a
    //         })
    //     }
    // }

    // setLang = () => {
    //     this.state.translate === true ? this.setState({lang: 'en'}) : this.setState({lang: 'ru'})
    // }

    render() {
        console.log(this.state, 'language state')

        return (
            <div className='iphone'>
                <div className='iphone-top'>
                    <span className='camera'></span>
                    <span className='sensor'></span>
                    <span className='speaker'></span>
                </div>
                <div className='top-bar'></div>
                <div className='iphone-screen'>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/objective' component={Objective}/>
                            <Route path='/skills' component={Skills}/>
                            <Route path='/projects' component={Projects}/>
                            <Route path='/experience' component={Experience}/>
                            <Route path='/education' component={Education}/>
                            <Route path='/traineeship' component={Traineeship}/>
                            <Route path='/languages' component={Languages}/>
                            <Route path='/sleep' component={Sleep}/>
                        </Switch>
                    </div>
                </div>
                <div className='buttons'>
                    <span className='on-off'></span>
                    <span className='sleep'>
                        <Link className='iphoneButtonLock' to='/sleep'> </Link>
                    </span>
                    <span className='up'></span>
                    <span className='down'></span>
                </div>
                <div className='bottom-bar'></div>
                <div className='iphone-bottom'>
                    <span>
                        <Link className='iphoneButtonHome' to='/'> </Link>
                    </span>
                </div>
            </div>
        )
    }
}