# Sharevalue airlines

Gebouwd: een applicatie om een vlucht te boeken: een gebruiker kan een vertrek en een aankomstlocatie invoeren, de gewenste vertrekdatum en het aantal personen. Na het klikken op de zoekknop krijg je een overzicht met gevonden vluchten. Als de gebruiker een vlucht selecteert kan de gebruiker zijn gegevens invoeren en krijgt de gebruiker een overzicht van de gegevens.

De focus ligt op de flight search, de data is gemockt (JSON). De bedragen/datums die bij de vluchten te zien zijn, zijn niet echt en er zijn maar een beperkt aantal bestemmingen.

De opdracht is in het front-end framework React gemaakt.

De opdracht is in te zien op 3 manieren:

1. Link naar de demo: https://sharevalue-airlines-jiro.netlify.app/ (via Netlify.)
2. Link naar de repo: https://github.com/JirosWorld/sharevalue-airlines (zodat code kan worden beoordeeld, en jullie zelf de applicatie kunnen draaien om te kijken hoe het werkt).
3. Gebruik van minimaal één zoekvoorbeeld waarmee gezocht kan worden in de applicatie: ```Zoek bijvoorbeeld op 'Ams' en 'Los'```

## Handleiding van de interface:

1. Zoek eerst, in linkerveld, een stad van vertrek; het woord ```amsterdam``` hoeft niet volledig getypt te worden.
2. Zoek dan, in rechterveld, een plaats van aankomst; het woord ```los angeles``` hoeft niet volledig getypt te worden.
3. Het zoeken naar alle andere steden in de mock data werkt ook, maar daar zit geen vluchtprijs calculatie bij.
4. _afwijking_: beschikbare vluchten worden al meteen zichtbaar tijdens het typen. Dus: selecteer 1 aankomst- of vertrek-vlucht die tijdens het typen zichtbaar worden.
5. Klik op het kalendertje van de data-pickers om vertrek/aankomst datum te selecteren (browserafhankelijk).
6. Klik dan op het number veld om aantal personen te selecteren of typ zelf een getal; er is een maximum van 7 personen.
7. Klik op de ZOEKEN knop.
8. Vul verder alle daaropvolgende velden in (kies de luxe/klasse in de dropdown) en klik op 'vlucht selecteren'.
9. Als laatste verschijnt er een scherm met de boekingsgegevens.

NB: er kan alleen op stad worden gezocht, niet op andere eigenschappen (dus niet op datum).

PS: de zoekresultaten kunnen niet doorgegeven worden als variabele, dus hebben geen gecalculeerde prijs. De totaalprijs na bestellen is een mock: het betreft de statische Key naar de JSON objecten van Amsterdam en Los Angeles, dus dat is steeds een vaste prijs, die je alleen kunt veranderen door een andere luxe-klasse te selecteren met de dropdown.

### Techniek:

- denkstappen in [pseudocode hier](PSEUDOCODE.md).
- React versie 18
- React hooks
- useState
- useEffect
- ternary operators
- createRef
- CSS (niet responsive, alleen voor desktop)
- alle interfaces in 1 lang form, met maar 1 submit
- console.log (staan nog in comments)

### Geïnstalleerd maar niet gebruikt

- React Hook-Form extension (dus de formulieren zijn geheel uitgeschreven, in useState)
- Axios extension voor Fetch

### Experimentele branches:

- https://feature-filtersearch--sharevalue-airlines-jiro.netlify.app/
- https://ternary-operator-version--sharevalue-airlines-jiro.netlify.app/

### UI schets:

![schets](./src/assets/airline-UI-schets.png)