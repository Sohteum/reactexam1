import React from 'react';

const OddEvenResult = ({ cnt }) => {

    return (
        <div>
            {cnt % 2 === 0 ? '짝수' : '홀수'}
        </div>
    );
};

export default OddEvenResult;