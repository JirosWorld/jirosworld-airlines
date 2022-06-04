import React from 'react';

function Personalia(props) {
    return (
        <section>
            <h2>Vul je gegevens in</h2>
            <label htmlFor="fullname">
                Volledige naam:
                <input
                    type="text"
                    name="fullname"
                    placeholder="voornaam achternaam"
                    id="fullname"
                    value="{formName}"
                />
            </label>
            <br/>
            <label htmlFor="address">
                Volledig adres:
                <input
                    type="text"
                    name="(stad, land)"
                    placeholder="naam"
                    id="address"
                    value="{formAddress}"
                />
            </label>
            <br/>
            <label htmlFor="phonenumber">
                Telefoon:
                <input
                    type="text"
                    name="phonenumber"
                    placeholder="06-12345678"
                    id="phonenumber"
                    value="{formPhonenr}"
                />
            </label>
            <br/>
            <label htmlFor="identification">
                ID nummer:
                <input
                    type="text"
                    name="identification"
                    placeholder="paspoortnummer"
                    id="identification"
                    value="{formIdentification}"
                />
            </label>
            <br/>
        </section>
    );
}

export default Personalia;