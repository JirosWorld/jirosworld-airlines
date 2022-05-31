import React from 'react';

function OutputField({departInput, arriveInput, children}) {
    return (
        <div className="output">
            <p><strong>Dit heb je gekozen:</strong></p>
            <p>Vertrek stad: {departInput},
                Aankomst stad: {arriveInput},
                aantal personen:
            </p>
        </div>
    );
}

export default OutputField;