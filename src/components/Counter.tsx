import React from 'react';
import Button from './Button';

function Counter({ setNumberCount, numberCount }) {
    return (
        <>
            <Button type="button" disabled={numberCount === 0} clickHandler={() => setNumberCount(numberCount - 1)}>
                -
            </Button>
            <p>{numberCount}</p>
            <Button type="button" clickHandler={() => setNumberCount(numberCount + 1)}>
                +
            </Button>
        </>
    );
}

export default Counter;