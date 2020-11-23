# Save Christmas part 1. (a.k.a. introduktion till algoritmer) :santa:

Lystring! Vi har fått ett uppdrag av ingen mindre än jultomten själv. Han som alla andra behöver *digitalisera sin verksamhet*. Vi kommer under följande veckor ta oss an detta och, om allt går väl, **tillsammans rädda julen!**

Jultomten behöver hjälp att hantera inkommande önskelistor, administrera sitt lager av julklappar, gallra bort stygga barn, med mera.

## Nödvändiga förkunskaper

Innan du ger dig i kast med detta behöver du ha någorlunda koll på loopar.

Innan du fortsätter:
- Skapa en fil `loop-warmups.js`
- I filen, skapa minst en `while`-loop och minst en `for`-loop. Se till att du förstår hur de fungerar innan du fortsätter. Diskutera eventuella frågetecken med din grupp!

## Steg 1. Lagerhantering av julklappar. :gift:

Jultomten har ett enormt lager av befintliga julklappar. Han saknar dock ett effektivt sätt att söka upp ifall han har en viss julklapp i sitt lager och i så fall var den befinner sig.

### Ditt första uppdrag - Har vi julklappen i lager?

Öppna filen `includes.js`. Du ser där en array av julklappar, vilket så klart bara är ett litet urval av jultomtens **enorma lager**. Du ser att funktionen `includes` är påbörjad, med lite pseudokod. 

Gör färdigt funktionen så att den fungerar enligt testerna i samma fil.

### Ditt andra uppdrag - Var finns julklappen? :mag:

Öppna filen `indexOf.js`. Du ser där en annan array av julklappar, likt uppgiften nyss. Du ser att funktionen `indexOf` är tom.

Gör färdigt funktionen så att den fungerar enligt testerna i samma fil. Den ska alltså *returnera indexet av en given julklapp i arrayen, eller -1 om den inte existerar i arrayen.*

Innan du fortsätter:
- Vad är en algoritm för något?
- Vad är pseudokod?
- Skulle man nu kunna skriva om funktionen `includes` så att den använder sig av `indexOf`? Hur skulle det kunna se ut? Fundera!

## Steg 2. Statistik :chart_with_upwards_trend:

**OBS: Vi har fått önskemål från Jultomtens IT-nisse att endast använda for-loopar i uppgifterna nedan. Jag vet inte varför, han bara sa så!**

Jultomten är intresserad av statistik. Han är t.ex. intresserad av att utifrån en lång lista på "stygghetspoäng" kunna ta reda på hur stygga barn i genomsnitt under året. Han vill även kunna plocka ut den lägsta och högsta poängen.

Öppna filen `statistics.js`.

Implementera tre algoritmer som räknar ut följande: högsta värde i en array, lägsta värde i en array, medelvärdet av alla tal i en array. Kalla funktionerna `max`, `min` och `mean` (medelvärde).

Skapa lite testdata och säkerställ att de fungerar. Till exempel så här

````javascript
console.log(mean([ 2, 0, 5, 8, 4, 5, 9 ])) // 4.714285714285714
````

Innan du fortsätter:
- Vad betyder det att implementera en algoritm?
- Vad är det för skillnad på **en algoritm** och **en implementation av en algoritm**?

## Steg 3. Konsten att massera stora mängder data i ett svep (map)

Jultomten har massor av information om barnen som skickat in önskelistor. Det inkluderar t.ex. namn, ålder, önskningar och stygghetspoäng ("naughtyScore"). Öppna filen `map.js`. Där ser du ett urval av denna datamängd, i form av en array. Titta på den!

Hur gör vi om vi från denna array t.ex. vill få ut alla åldrar på barnen, så att vi kan räkna ut medelåldern?

Svaret är genom en funktion som heter `map`. Det `map` gör är att den tar emot en så kallad "callback"-funktion som ett argument och sedan anropas callback-funktionen med varje element i arrayen som argument. `map` returnerar en ny array där varje element har transformerats genom callback-funktionen.

Förvirrande? Ja, antagligen! Kolla in kodexemplet nedan.

````javascript
const myArr = [20, 30, 40]

const anotherArray = map(myArr, x => 2 * x) // Dubblera varje element.
                                            // x => 2 * x är en callback-funktion som dubblar ett värde.

console.log(anotherArray)                   // [40, 60, 80]
````

I `map.js` är funktionen `map` skriven i pseudokod.

1. Gör färdigt implementationen så att testerna i filen fungerar.
2. Gör minst ett eget test under de andra två

## Steg 4. Att gallra bort stygga barn (filter) :frowning:

Tomten behöver som sagt ett sätt att gallra bort barn beroende på hur stygga de varit. Det vore olyckligt om ett styggt barn fick en julklapp medan ett snällt barn blev utan. Man kan kalla processen för att *filtrera*.

Öppna filen `filter.js`.

Du ska nu skapa en syskon-funktion till `map`, som kommer vara mycket användbar för oss. Den heter `filter` och ska ta två argument: en array och en callback-funktion. Callback-funktionen anropas med varje element som argument och beroende på om den returnerar `true` eller `false` så ska elementet kopieras över till en ny array, som returneras.

Svårt att förstå? Se om följande exempel klarnar upp det för dig:

````javascript
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]    // Blandade nummer

const filteredNumbers = filter(numbers, x => x < 10)            // Filtrerar bort alla tal som inte uppfyller villkoret x < 10
                                                                // x => x < 10 är en callback-funktion som returnerar true eller false

console.log(filteredNumbers)                                    // [4, 3, 5, 8, 2, 9, 1, 2]
````

# Fördjupning!

Grattis! Vi är verkligen på rätt kurs för att kunna hjälpa jultomten.

## Higher order functions

1. Ta reda på vad *Higher Order Functions* (HOFs) är för något. Vad är det i teorin, och vad kan vara exempel på enkla HOFs? Har du stött på några HOFs i den här uppgiften?

2. Hitta på och skriv tre stycken egna Higher Order Functions. **Testa alltid att de fungerar som du tänkt innan du går vidare!**

<details>
<summary>Ledtråd</summary>

Gör t.ex. en funktion som heter `runTwice`. Den tar en callback-funktion som argument och anropar den två gånger.

</details>

## Primtal

Jultomten gillar matematik. Tänk ut en algoritm som ger alla **primtal** upp till tal N. Implementera den som en funktion i javascript. Testa och se om den fungerar. *Vad är alla primtal under 1000?*

## Kommit hit?

Gör vad du vill. Ät glass. Hjälp dina kamrater.