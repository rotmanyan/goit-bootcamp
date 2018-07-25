import React from 'react';

const List = () => {
    const arrNumbers = [1,2,3,4,5,6,7,8,9];
    const items = arrNumbers.map(el => <li key={el}>{el}</li>)
    return (
        <ul>
            {items}
        </ul>
    )
};

export default List;