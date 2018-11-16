import React, {Component} from 'react';
import './App.css';
import Iphone from './Component/Iphone/Iphone'
import { connect } from 'react-redux'

const mapStateToProps = ({})

@connect(mapStateToProps)
class App extends Component {
    render() {
        const {flagUsa, flagRus} = this.props
        return (
            <div className="wrapper">
                <Iphone flagUsa={flagUsa} flagRus={flagRus}/>
            </div>
        );
    }
}

export default App;

