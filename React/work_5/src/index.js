// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

/* eslint-disable react/prop-types */

// import 'rc-tooltip/assets/bootstrap.css';
// import Tooltip from 'rc-tooltip';

// const handle = (props) => {
//     const { value, dragging, index, ...restProps } = props;
//     return (
//         <Tooltip
//             prefixCls="rc-slider-tooltip"
//             overlay={value}
//             visible={dragging}
//             placement="top"
//             key={index}
//         >
//             <Handle value={value} {...restProps} />
//         </Tooltip>
//     );
// };

/*{/!*<div style={wrapperStyle}>*!/}
{/!*<p>Slider with custom handle</p>*!/}
{/!*<Slider vertical={true}*!/}
{/!*min={0}*!/}
{/!*max={20}*!/}
{/!*defaultValue={3}*!/}
{/!*handle={handle} />*!/}
{/!*</div>*!/}*/

import React from 'react';
import ReactDOM from 'react-dom';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = {height: 400, margin: 50};

ReactDOM.render(
    <div>
        <p>Range with custom handle</p>
        <Range
            style={wrapperStyle}
            vertical={true}
            min={0}
            step={5}
            max={20}
            defaultValue={[3, 10]}
        />
    </div>, document.getElementById('root')
);