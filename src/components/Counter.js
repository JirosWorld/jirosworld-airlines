import React from 'react';
import Button from './Button';

function Counter({ setPersonCount, personCount }) {
    return (
        <>
            <Button type="button" disabled={personCount === 0} clickHandler={() => setPersonCount(personCount - 1)}>
                -
            </Button>
            <p>{personCount}</p>
            <Button type="button" clickHandler={() => setPersonCount(personCount + 1)}>
                +
            </Button>
        </>
    );
}

export default Counter;