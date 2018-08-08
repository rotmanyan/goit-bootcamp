import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './Chart.css'

const Chart = props => {
    return (
        <div>
            <ul className="chart-list">
                <li className="chart-list__item">
                    <NavLink to='/'>
                        Artists
                    </NavLink>
                </li>
                <li className="chart-list__item">
                    <NavLink to='/albums'>
                        Albums
                    </NavLink>
                </li>
                <li className="chart-list__item">
                    <NavLink to='/songs'>
                        Songs
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

Chart.propTypes = {};

export default Chart;