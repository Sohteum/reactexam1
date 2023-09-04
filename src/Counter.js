import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = ({ initialValue }) => {

    const [cnt, setCnt] = useState(initialValue)


    const PlusCnt = () => {
        setCnt(current => current + 1)

    }
    const subCnt = () => {
        setCnt(current => current - 1)

    }

    return (
        <div>
            <h2>{cnt}</h2>
            <button onClick={PlusCnt}>+</button>
            <button onClick={subCnt}>-</button>
            <OddEvenResult cnt={cnt} />
        </div>
    );
};

Counter.defaultProps = {
    initialValue: 0,
}

export default Counter;