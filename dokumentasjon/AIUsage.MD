<hr></hr>
Leah Yoimiya Johansen (19.08.2026): 



Stikk ord notater:
-           Enkel
-           Mobil
-           Ekspotere
-           Sikker
Løsning i sin helhet:
Arrangement, kurs og info møte app. 
-           Del opp i tre (design forskjell tydlig så du kan
se hva type arrangement det er)
-           Navn på arrengement, hvem som holder og tid
Skal kunne legge inn informasjon om hvem som kommer
-           Navn
-           Alder (fødsels dato?)
-           Nummer
-           email
Administasjons grensesnitt:
Her vurderes og legge opp en super bruker for bruk av kun på
pc dermed vis hoved funksjonen er eksportering av filer vil mobil versjon ikke
være tilstrekkelig. Med mindre arbeids plass har egen printer koblett til nett.
Her vil da mobil versjonen være betraktlig mindre skjellet på en Web versionen
Betaling?:
Ingen krav endå men og sette det klart til implimentering
blir planen. Lag funksjon og lås derreter funksjonen. Her vil vi ikke få støtte
for vipps dermed vi må ha en aktiv løsning. Legge til en tom redirect som kan
senere fylles med betalingss måter. Eventuelt få paypal api til og fungere
dermed denne lager en egen prosess som jeg må bare linke til. Men bare under
testing version.
 
Plan
Mål: 
Lage en enkel løsning for bedriften til og holde orden på
arrengementer og holde styr på hvem som kommer i et lett ekspotert fil. Den skal
være lett og navigere og senke tid så mye som mulig for manuelt arbeid.
Krav spesifikasjon: 
Språk:
Next.js, Node, JS, SQL server
Next.js: dette er et nymoderne rammeverk som emulerer ganske
godt React men har allerede en router og lett interigasjon med Backend
Node: her vil backend biten være skrevet i node for og ikke
blande for mye teknologi og gjøre det lettere for andre programerere til og skjønne
løsningen i sin helhet dersom node bruker JS. Den funker også flott med Next 
JS: Vi bruker Javascript som hoved språk dermed dette er et
lett språk og hoved språke til nettleseren. Vi kunne fått litt ekstra støtte
med TypeScript istendenfor. Men for og unslippe fellen med at prosjektet tar
for lang tid skrives den i Javascript. Det skal være notert godt i kode basen
så en eventuel omskrivning ikke vil ta så lang tid
Ytelse: programmet skal være så raskt som mulig og laste. Dersom
de fleste apper bruker veldig liten tid på og klikke rundt. Eventuelle tanker
med og splitte opp app for react native burde holdes i tankene.
Kostnad:
Beggyner lønn for en med fagbrev blir rundt 32 259kr i
måneden. Hvis vi beregner en måned som 5 arbeidsdager i uken og 8 timer arbeids
dag sitter vi på 201kr timen. Prosjektet skal vare i syv dager. Da vil
fulstendig lønn på dette prosjektet være 11 256
Vi bruker også uniweb vps for hosting av backend og
Database. Dette gjør vi da dersom di har rimlig pris hvor vi kan kjøre en Sql
server i debian 13 og vil bare koste oss 220kr måneden her åpner vi også for
skalering men blir da låst etter hvert. Om vi skalerer uten for norge vil
selfhosting bli den beste idén. Men siden vi har rammene allerede klar til
hvordan den skal bygges opp skal overføring ikke ta så lang tid. 
Vi vil nok hoste nettsiden via vercel dersom vercel utviklet
next.js og har best støtte til dette. Vi splitter disse to opp i forskjellige
hosting tjenester dersom det blir for dyrt og kjøre alt gjennom en hosting
tjeneste. Og går vi for en norsk server så vil vi miste den gode tilknyttningen
til vercel som vi ønsker og beholde. Vi passer også på at vis vi får en lekasje
i vercel har vi uniweb og lene oss på. Men uniweb er ikke sterk nok til at vi
kan hoste nettssiden også uten ekstra kostnadder. Går også vercel ned kan vi
lage en backup plan. Går uniweb ned er det litt mer krise. Di lover også en
99,98% runtime og forholder seg til norske regler over data behandling. 

Her setter jeg også opp vedlikehold pris for et år som vil
da si at du får omtrent 48 dager med vedlikehold av kodebasen. Dette tar jeg
med i prisingen dersom man ikke kan planlegge for alle feil i beggynelsen. Eventuele
bugs som trenger fiksing og mer tid for en inhouse fulstacker til og ta over
prosjektet.  Jeg setter også en fast pris
på løøsningen som 50400kr som kan betales ned månedlig så jeg kan tjene profitt
på arbeidet. Da etter endt arbeid vil løsningen i sinn helhet være dems. En liten
løsning pleier som regel og ligge rundt 100 000kr til 150 000kr her
får di en rabatt på 50% dersom det er en ny utdannet lærling som utfører løsningen.
Det skal også legges opp til at den kan videre utvikles så di vil få klare men
ikke ferdige filer. Her er også vercel et mørke tall dersom du må selv
diskutere med bedriften hva som trengs men etter proplanen vil prisen sitte på
20$ som omgjørs til 220kr. Her kan også addons for og se speed insight eller annen
nyttig informasjon. Dette må tas med Kunde Hva hen ønsker

Blå: Admin strøm
Grønn: Bruker strøm
Rød: Admin og bruker strøm
Hvit: Ingen eierskap
Her kan vi se at når man logger inn logger man enten inn som
en bruker eller admin bruker. Som vil kalle på informasjonen fra databasen som
derreter går videre til Backenden hvor vi passer på at ingen av informasjonen
kan bli åpnet av nettsiden eller lyset ut av nettsiden i inspect tool. Data skal
være kryptert og seperat og bare vise når det trengs. Altså at den gjør et kall
til databasen når brukeren trenger informasjonen. Lettere valget kunne ha vært
og cashet informasjonen men dersom dette ikke høres ut som et stort selskap
skal vi unslippe tids kostnaddene med og ikke cashe informasjonen
Kort Info
Teknologi: Next.js, Node, microsoft sql server, debian 13
Hosting: uniweb, Vercel
Krav: Admin dashbord, Arrangement side, brukerinformasjon, Logg
inn
Løsningen skal holdes lett og skal ikke inneholde
unødvendige funksjoner. Koden skal være dynamisk og lett endret på med gode
kommentarer som senker arbeid for eventuell switch av kodespråk fra javascript
til Typescript. Vi holder oss unna cashing med mindre det bli laget en app. Vi over
kompliserer ikke backenden med nytt språk dersom javascript holder for
funksjonaliteten vi ønsker. Heller i framtiden se på og bytte til et mer low
level språk som C# men vi vil ikke bemerke mye forskjeld i hastighet på en
løsning som dette

kan du rettskrive og kun rettskrive. ikke fjern fag ord

<hr>

Gemini 3.1 pro:

Her er den rettskrevne versjonen av teksten din. Jeg har rettet opp skrivefeil, orddelingsfeil, tegnsetting og grammatikk (som og/å-feil), men bevart alle faguttrykk og meningsinnholdet slik du ba om:

**Stikkordsnotater:**

* Enkel
* Mobil
* Eksportere
* Sikker

**Løsning i sin helhet:**
Arrangement-, kurs- og infomøte-app.

* Del opp i tre (tydelig designforskjell, så man kan se hvilken type arrangement det er)
* Navn på arrangement, hvem som holder det og tid
* Skal kunne legge inn informasjon om hvem som kommer:
* Navn
* Alder (fødselsdato?)
* Nummer
* E-post



**Administrasjonsgrensesnitt:**
Her vurderes det å legge opp en superbruker for bruk kun på PC. Ettersom hovedfunksjonen er eksportering av filer, vil mobilversjonen ikke være tilstrekkelig, med mindre arbeidsplassen har en egen printer koblet til nettet. Her vil da mobilversjonen være et betraktelig mindre skjelett av web-versjonen.

**Betaling?:**
Ingen krav enda, men å sette det klart til implementering blir planen. Lage funksjonen og låse den deretter. Her vil vi ikke få støtte for Vipps, dermed må vi ha en aktiv løsning. Legge til en tom redirect som senere kan fylles med betalingsmåter. Eventuelt få PayPal-API til å fungere, da denne lager en egen prosess som jeg bare trenger å linke til. Men bare under testversjonen.

**Plan**

**Mål:**
Lage en enkel løsning for bedriften for å holde orden på arrangementer og holde styr på hvem som kommer, i en lett eksportert fil. Den skal være lett å navigere i og redusere tiden brukt på manuelt arbeid så mye som mulig.

**Kravspesifikasjon:**
**Språk:**
Next.js, Node, JS, SQL Server

* Next.js: Dette er et nymoderne rammeverk som bygger ganske godt på React, men har allerede en router og lett integrasjon med backend.
* Node: Her vil backend-biten være skrevet i Node for å ikke blande for mye teknologi, og for å gjøre det lettere for andre programmerere å skjønne løsningen i sin helhet ettersom Node bruker JS. Den fungerer også flott med Next.js.
* JS: Vi bruker JavaScript som hovedspråk ettersom dette er et lett språk og hovedspråket til nettleseren. Vi kunne fått litt ekstra støtte med TypeScript i stedet. Men for å unngå fellen med at prosjektet tar for lang tid, skrives den i JavaScript. Det skal være kommentert godt i kodebasen, slik at en eventuell omskrivning ikke vil ta så lang tid.

**Ytelse:**
Programmet skal være så raskt som mulig å laste, ettersom de fleste apper bruker veldig liten tid på å klikke rundt. Eventuelle tanker om å splitte opp appen for React Native burde holdes i bakhodet.

**Kostnad:**
Begynnerlønn for en med fagbrev er rundt 32 259 kr i måneden. Hvis vi beregner en måned som 5 arbeidsdager i uken og 8 timers arbeidsdag, sitter vi med 201 kr i timen. Prosjektet skal vare i syv dager. Da vil fullstendig lønn på dette prosjektet være 11 256 kr.

Vi bruker også Uniweb VPS for hosting av backend og database. Dette gjør vi fordi de har en rimelig pris hvor vi kan kjøre en SQL Server i Debian 13, som bare vil koste oss 220 kr i måneden. Her åpner vi også for skalering, men blir da låst etter hvert. Om vi skalerer utenfor Norge, vil self-hosting bli den beste ideen. Men siden vi allerede har rammene klare for hvordan den skal bygges opp, skal ikke en overføring ta så lang tid.

Vi vil nok hoste nettsiden via Vercel, ettersom Vercel utviklet Next.js og har best støtte for dette. Vi splitter disse to opp i forskjellige hostingtjenester dersom det blir for dyrt å kjøre alt gjennom én hostingtjeneste. Og går vi for en norsk server, så vil vi miste den gode tilknytningen til Vercel som vi ønsker å beholde. Vi passer også på at hvis vi får en lekkasje i Vercel, har vi Uniweb å lene oss på. Men Uniweb er ikke sterk nok til at vi kan hoste nettsiden også uten ekstra kostnader. Går Vercel ned, kan vi lage en backupplan. Går Uniweb ned, er det litt mer krise. De lover også 99,98 % oppetid (runtime) og forholder seg til norske regler for databehandling.

Her setter jeg også opp en vedlikeholdspris for et år, som vil si at du får omtrent 48 dager med vedlikehold av kodebasen. Dette tar jeg med i prisingen, ettersom man ikke kan planlegge for alle feil i begynnelsen. Eventuelle bugs som trenger fiksing, og mer tid for en in-house fullstacker til å ta over prosjektet. Jeg setter også en fastpris på løsningen på 50 400 kr, som kan betales ned månedlig slik at jeg kan tjene profitt på arbeidet. Etter endt arbeid vil løsningen i sin helhet være deres. En liten løsning pleier som regel å ligge på rundt 100 000 kr til 150 000 kr; her får de en rabatt på 50 % ettersom det er en nyutdannet lærling som utfører løsningen. Det skal også legges opp til at den kan videreutvikles, så de vil få klare, men ikke ferdige filer. Her er også Vercel et mørketall, ettersom du selv må diskutere med bedriften hva som trengs, men etter Pro-planen vil prisen ligge på 20 $, som omgjøres til 220 kr. Her kan vi også ha addons for å se Speed Insights eller annen nyttig informasjon. Dette må tas med kunden hva hen ønsker.

* Blå: Admin-strøm
* Grønn: Bruker-strøm
* Rød: Admin- og bruker-strøm
* Hvit: Ingen eierskap

Her kan vi se at når man logger inn, logger man enten inn som en bruker eller admin-bruker. Systemet vil kalle på informasjonen fra databasen, som deretter går videre til backenden, hvor vi passer på at ingenting av informasjonen kan bli åpnet av nettsiden eller lekke ut til nettsidens inspect tool. Data skal være kryptert og separat, og bare vises når det trengs. Altså at den gjør et kall til databasen når brukeren trenger informasjonen. Det enklere valget kunne ha vært å cache informasjonen, men ettersom dette ikke høres ut som et stort selskap, skal vi unngå tidskostnadene ved å ikke cache informasjonen.

**Kort info:**

* **Teknologi:** Next.js, Node, Microsoft SQL Server, Debian 13
* **Hosting:** Uniweb, Vercel
* **Krav:** Admin-dashboard, arrangementside, brukerinformasjon, logg inn

Løsningen skal holdes lett og skal ikke inneholde unødvendige funksjoner. Koden skal være dynamisk og lett å endre på, med gode kommentarer som reduserer arbeidet for en eventuell switch av kodespråk fra JavaScript til TypeScript. Vi holder oss unna caching med mindre det blir laget en app. Vi overkompliserer ikke backenden med et nytt språk, ettersom JavaScript holder for funksjonaliteten vi ønsker. Vi kan heller i fremtiden se på å bytte til et mer low-level språk som C#, men vi vil ikke merke mye forskjell i hastighet på en løsning som dette.

<hr>