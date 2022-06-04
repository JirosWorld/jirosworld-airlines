import React from 'react';

// let personCounter = 0;
// let setpersonCounter = 0;

function ButtonField({name, emoji, personCounter, setpersonCounter}) {

    return (
            <fieldset className={`${name}-field`}>
                <h3>{emoji} {name}</h3>
                <button
                    type="button"
                    name={name}
                    disabled={personCounter === 0}
                    onClick={() =>
                        setpersonCounter(personCounter - 1)
                    }>
                    -
                </button>
                <p>{personCounter}</p>
                <button
                    type="button"
                    name={name}
                    onClick={() =>
                        setpersonCounter(personCounter + 1)
                    }>
                    +
                </button>
            </fieldset>
    );
}

export default ButtonField;
