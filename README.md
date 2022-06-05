# Sharevalue assessment

Gebouwd: een applicatie om een vlucht te boeken: een gebruiker kan een vertrek en een aankomstlocatie invoeren, de gewenste vertrekdatum en het aantal personen. Na het klikken op de zoekknop krijg je een overzicht met gevonden vluchten. Als de gebruiker een vlucht selecteert kan de gebruiker zijn gegevens invoeren en krijgt de gebruiker een overzicht van de gegevens.

De focus ligt op de flight search, de data is gemockt (JSON). De bedragen/datums die bij de vluchten te zien zijn, zijn niet echt en er zijn maar een beperkt aantal bestemmingen.

De opdracht is in het front-end framework React gemaakt.

De opdracht is in te zien op 3 manieren:

1. Link naar de demo: https://main--sharevalue-airlines-jiro.netlify.app/ (via Netlify.) of via https://sharevalue-airlines-jiro.netlify.app/
2. Link naar de repo: https://github.com/JirosWorld/sharevalue-airlines (zodat code kan worden beoordeeld, en jullie zelf de applicatie kunnen draaien om te kijken hoe het werkt).
3. Maak gebruik van minimaal één zoekvoorbeeld waarmee gezocht kan worden in de applicatie: ```Zoek bijvoorbeeld op 'Amster' en 'Los Ang'```

Handleiding van de interface:

1. Zoek eerst, in linkerveld, een stad van vertrek; het woord '_amsterdam_' hoeft niet volledig getypt te worden.
2. Zoek dan, in rechterveld, een plaats van aankomst; het woord '_los angeles_' hoeft niet volledig getypt te worden.
3. Klik op het kalendertje van de data-pickers om vertrek/aankomst datum te selecteren (browserafhankelijk).
4. Klik dan op het number veld om aantal personen te selecteren of typ zelf een getal; er is een maximum van 7 personen.
5. Klik op de ZOEKEN knop.
6. Vul verder alle daaropvolgende velden in en klik op 'vlucht selecteren'.
7. Als laatste verschijnt er een scherm met de boekgegevens.

### Techniek:

- denkstappen in [pseudocode hier](PSEUDOCODE.md).
- React versie 18
- React hooks
- useState
- useEffect
- ternary operators
- useRef
- CSS (niet responsive, alleen voor desktop)
- alle interfaces in 1 lang form, met maar 1 submit

## Geïnstalleerd maar niet gebruikt

- React Hook-Form extension (dus de formulieren zijn geheel uitgeschreven, in useState)
- Axios extension voor Fetch

### Experimentele branches:

- https://feature-filtersearch--sharevalue-airlines-jiro.netlify.app/
- https://ternary-operator-version--sharevalue-airlines-jiro.netlify.app/

### UI schets:

![schets](./src/assets/airline-UI-schets.png)