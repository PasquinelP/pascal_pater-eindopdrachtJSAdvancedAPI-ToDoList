# Eindopdracht Javascript Advanced API: ToDoList

## Introductie 

Je gaat een TODO lijstje bouwen in Vanilla JavaScript!

De Todo lijst ga je koppelen aan een RESTful API die wij alvast hebben gebouwd. Je gaat dus niets van de data opslaan in de front-end van de applicatie. Alle data ga je verkrijgen van de "back-end" waar je zelf een eigen endpoint krijgt.

## Informatie over de database:

**Lees dit goed door.**

* Clone onze REST API repository zodat deze op je eigen computer staat.
* Volg de installatie instructies in de README van de repository.
* Lees de documentatie in de README van de repository om er achter te komen hoe je deze lokale API gebruikt
* Stuur met Postman een GET request naar de URL en controleer dit
* Schrijf een stukje code om hetzelfde GET request te sturen en console.log het resultaat zodat je ook daar de lege array terug ziet komen (denk aan async/await!)
* Om een eerste item in je endpoint te krijgen kun je een POST request sturen naar de URL, doe dit eerst met Postman en vervolgens ook vanuit JavaScript. Stuur als body een JavaScript object mee met een omschrijving en een "done" key die op "false" staat. Zie dit voorbeeld:
```
    const data = {description: "buy oatmeal", done: false};
    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      },
    });
```
* Check dan met GET wat er in het endpoint staat
* Je zal erachter komen dat het endpoint werkt met **hashes** die het zelf genereert van jouw data elke keer als je een request doet. Je data zal er alsvolgt uit komen te zien:
```
{
  "_id": "skdjfhskdjfhsdfk",
  "description": "buy oatmilk",
  "done": false,
 "_createdOn": "2020-10-20et etc"
}
```
* Zoals je ziet krijg je gratis een id mee van de endpoint, die heb je later nodig om te verwijzen naar die specifieke taak.

## Requirements:

* Als gebruiker wil ik een inputveld zien waarin ik mijn taak in kan vullen.
* Als gebruiker kan ik op een button drukken met de tekst "Add Task" waardoor je ingevulde taak toegevoegd wordt aan de lijst.
* Als gebruiker zie ik wanneer ik op de add button knop heb geklikt, de taak verschijnen in mijn takenlijst.
* Taak verwijderen: Als gebruiker kan ik in de takenlijst op een icoontje klikken van een prullenbak, rechts naast de taak, waardoor de taak uit mijn takenlijst wordt verwijderd.

## API requirements:

* GET: Verkrijg de (initiële) lijst met taken van de database.
* POST: Update de takenlijst met 1 nieuwe taak. Stuur alleen `{description: "blah", done: false}` 
* DELETE: Verwijder een taak uit de database. Gebruik de id die je terugkrijgt als identifier.
* Maak een file genaamd `api-client.js` zoals je hebt geleerd in de afgelopen tijd voor al je requests.

## Extra Extra Bonus :

Extra requirements:
* Taak doorstrepen: Als gebruiker kan ik in de takenlijst op een checkbox klikken, links naast de taak, waardoor de tekst van de taak doorgestreept wordt en ik mijn taak kan afstrepen.
* Als gebruiker wil ik op mijn taak kunnen klikken en de tekst kunnen aanpassen.

Extra API requirements (die samenhangt met het bovenstaande):
* PUT: update een bestaande taak de property done of niet done.
* PUT: update en bestaande taak met de PUT method.

## Design:

Ook deze week: styling is niet belangrijk. Spendeer niet de veel tijd aan stylen! Focus je eerst op functionaliteiten en daarna pas op stylen (we gaan volgende week lekker stylen, no worries )

