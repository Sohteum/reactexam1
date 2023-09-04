import React from 'react';

const Container = ({Children}) => {
    console.log(Children);
    return (
        <div style={{margin:20, padding:20, border:"1px solid #000"}}>
            {Children}
        </div>
    );
};

export default Container;