# Denkstappen, in pseudocode

1. maak een JSON mock data file met Vluchthaven gegevens
2. maak 1 lang formulier met alle HTML code voor:
- text-input 'departure' locatie
- text-input 'arrival' locatie
- datum-picker vertrekdatum
- datum-picker aankomstdatum
- counter-veld aantal passagiers
- button met onClick functie voor ZOEKEN, geen submit.

3. sectie voor selecteren en bestellen
- radio-buttons voor alle gevonden 'departure' resultaten
- radio-buttons voor alle gevonden 'arrival' resultaten
4. na selecteren van departure/arrival moet pas de gevonden vlucht verschijnen, maar eerst 1 lang formulier maken door de invulvelden meteen onder de radiobuttons te zetten:
- voor & achternaam
- adres, stad
- telefoon
- ID nummer (paspoort)
- mock/gesimuleerde vluchtprijs door vaste getallen bij elkaar op te tellen met een Helper functie
- Submit button om alles te kunnen Posten
5. Toon alle ingevoerde data uit het formulier in een Div/Section
6. Als laatste stap met een && operator de Sections zichtbaar of onzichtbaar maken op basis van wel/niet ingevulde data ( is > groter dan Nul of .length langer dan Nul) = met de "ternary operator".
7. Uiteindelijk kan code netter worden ingedeeld door van ale onderdelen losse componenten/sections te maken.