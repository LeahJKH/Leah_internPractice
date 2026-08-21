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
Leah Yoimiya Johansen (21.08.2026):

Kravene knyttet til logging av registreringer og brukerens egen registreringshistorikk må fremgå tydeligere.



kan du forklare lettere? jeg lager en løsningsplan for fullstack web app


gemini pro 3.1 (21.08.2026):

Når du får en tilbakemelding om at "kravene knyttet til logging og historikk må fremgå tydeligere", betyr det rett og slett at løsningsplanen din mangler en konkret beskrivelse av hvordan systemet skal huske hva som er gjort, og hvordan brukeren kan se dette etterpå.Siden du bygger en fullstack web-app, kan du dele dette inn i to praktiske deler i løsningsplanen din: Backend (loggingen) og Frontend (historikken).Slik kan du forklare og løse det i planen din:1. "Logging av registreringer" (Systemets hukommelse - Backend/Database)Dette handler om at applikasjonen må lagre spor i databasen hver gang en bruker gjør en registrering (for eksempel fyller ut et skjema, oppretter en sak, eller lagrer data).Hva du må skrive i løsningsplanen:Databasemodell: Forklar at hver gang noe lagres, skal det automatisk lagres metadata. For eksempel kolonner for created_at (tidspunkt), updated_at (sist endret) og user_id (hvem som gjorde det).Audit log (valgfritt): Hvis det er et system med høye krav til sikkerhet, må du kanskje nevne at dere oppretter en egen database-tabell (f.eks. ActionLogs) som lagrer nøyaktig hva som ble endret, når, og av hvem, slik at ingenting kan slettes uten spor.2. "Brukerens egen registreringshistorikk" (Det brukeren ser - Frontend)Dette handler om brukeropplevelsen (UI). Brukeren skal slippe å lure på "Gikk registreringen min gjennom?" eller "Hva fylte jeg egentlig ut forrige måned?".Hva du må skrive i løsningsplanen:Siden/Gripesnittet: Beskriv at du skal lage en "Min side" eller en egen fane for "Historikk" i web-appen.Funksjonalitet: Forklar at frontend skal hente en liste over brukerens tidligere registreringer fra et API (f.eks. GET /api/users/{id}/registrations) og vise dette i en tabell eller liste.Detaljer: Brukeren skal kunne se dato for registreringen, status (f.eks. "Under behandling" eller "Ferdig"), og gjerne en knapp for å se detaljene de fylte ut.Slik kan du formulere det i selve løsningsplanen din:"Krav til logging og historikk
For å sikre sporbarhet vil alle registreringer i databasen knyttes til den innloggede brukerens user_id og stemples med tidsangivelse (created_at). På frontend vil det utvikles en egen komponent, 'Min Historikk', hvor brukeren får en oversiktlig tabell over alle sine tidligere registreringer, inkludert dato og status. Dataene hentes utelukkende for den innloggede brukeren via et sikret API-endepunkt."

<hr>

Leah Yoimiya Johansen (21.08.2026):
Løsning i sin helhet:
Arrangement-, kurs- og infomøte-app.

Administrasjonsgrensesnitt:
Her vurderes det å legge opp en superbruker for bruk kun på
PC. Ettersom hovedfunksjonen er eksportering av filer, vil mobilversjonen ikke
være tilstrekkelig, med mindre arbeidsplassen har en egen printer koblet til
nettet. Her vil da mobilversjonen være et betraktelig mindre skjelett av
web-versjonen.
                                         

Betaling?:
Ingen krav enda, men å sette det klart til implementering
blir planen. Lage funksjonen og låse den deretter. Her vil vi ikke få støtte
for Vipps, dermed må vi ha en aktiv løsning. Legge til en tom redirect som
senere kan fylles med betalingsmåter. Eventuelt få PayPal-API til å fungere, da
denne lager en egen prosess som jeg bare trenger å linke til. Men bare under
testversjonen.
 

Plan
 

Mål:
Lage en enkel løsning for bedriften for å holde orden på
arrangementer og holde styr på hvem som kommer, i en lett eksportert fil. Den
skal være lett å navigere i og redusere tiden brukt på manuelt arbeid så mye
som mulig.

Avgrensninger: 
Betaling: 
Vi lager ikke betaling dersom det krever et aktivt produkt
og vi ble bare spurt om muligheten. Heller så lager vi en routing og setter opp
bunn informasjonen i frontend kun så det kan bli implimentert senere. Dette vil
ikke kreve mye resurser og bare lage åpningen for og videre utvikle og vil
gjøre jobben lettere når vi kommer så langt. Jeg vil ikke lagre noe informasjon
betalingsvis for akkurat denne grunnen og ha det lagret når det ikke er i bruk
vil kreve mer av systemet våres

Kravspesifikasjon:
Krav mål:
Felles krav bruker og admin:
Krav_1: bruker skal logge inn
Krav_2: endre kjønn og navn
Krav_3: legge seg selv inn i et arrengment
Krav_4: bytte passord
ADMIN:
Krav_1: fjerne person fra arrengment
Krav_2: sende passord endring bekreftelse
Krav_3: endre person info
Krav_4: ekspoter arrengment info

Hva trengs for å fullføre?:
-           1 pc
-           Uniweb vps server
-           Vercel server
-           Figma lisens
-           Code Editor lisens
-           Test telefon
-           1-3 testere

Språk:
Next.js,
Node, JS, SQL Server
 
Next.js: Dette er et nymoderne rammeverk som bygger
ganske godt på React, men har allerede en router og lett integrasjon med
backend.
Node: Her vil backend-biten være skrevet i Node for å
ikke blande for mye teknologi, og for å gjøre det lettere for andre
programmerere å skjønne løsningen i sin helhet ettersom Node bruker JS. Den
fungerer også flott med Next.js.
JS: Vi bruker JavaScript som hovedspråk ettersom
dette er et lett språk og hovedspråket til nettleseren. Vi kunne fått litt
ekstra støtte med TypeScript i stedet. Men for å unngå fellen med at prosjektet
tar for lang tid, skrives den i JavaScript. Det skal være kommentert godt i
kodebasen, slik at en eventuell omskrivning ikke vil ta så lang tid.
 

Ytelse:
Programmet skal være så raskt som mulig å laste, ettersom de
fleste apper bruker veldig liten tid på å klikke rundt. Eventuelle tanker om å
splitte opp appen for React Native burde holdes i bakhodet.

Kostnad:
Begynnerlønn for en med fagbrev er rundt 32 259 kr i
måneden. Hvis vi beregner en måned som 5 arbeidsdager i uken og 8 timers
arbeidsdag, sitter vi med 201 kr i timen. Prosjektet skal vare i syv dager. Da
vil fullstendig lønn på dette prosjektet være 11 256 kr.
 
Vi bruker også Uniweb VPS for hosting av backend og
database. Dette gjør vi fordi de har en rimelig pris hvor vi kan kjøre en SQL
Server i Debian 13, som bare vil koste oss 220 kr i måneden. Her åpner vi også
for skalering, men blir da låst etter hvert. Om vi skalerer utenfor Norge, vil
self-hosting bli den beste ideen. Men siden vi allerede har rammene klare for
hvordan den skal bygges opp, skal ikke en overføring ta så lang tid.
 
Vi vil nok hoste nettsiden via Vercel, ettersom Vercel
utviklet Next.js og har best støtte for dette. Vi splitter disse to opp i
forskjellige hostingtjenester dersom det blir for dyrt å kjøre alt gjennom én
hostingtjeneste. Og går vi for en norsk server, så vil vi miste den gode
tilknytningen til Vercel som vi ønsker å beholde. Vi passer også på at hvis vi
får en lekkasje i Vercel, har vi Uniweb å lene oss på. Men Uniweb er ikke sterk
nok til at vi kan hoste nettsiden også uten ekstra kostnader. Går Vercel ned,
kan vi lage en backupplan. Går Uniweb ned, er det litt mer krise. De lover også
99,98 % oppetid (runtime) og forholder seg til norske regler for
databehandling.
 

 
 
  
  
  
  
  
  
  
  
  
  
  
  
 
 
 
 
Her setter jeg også opp en vedlikeholdspris for et år, som
vil si at du får omtrent 48 dager med vedlikehold av kodebasen. Dette tar jeg
med i prisingen, ettersom man ikke kan planlegge for alle feil i begynnelsen.
Eventuelle bugs som trenger fiksing, og mer tid for en in-house fullstacker til
å ta over prosjektet. Jeg setter også en fastpris på løsningen på 50 400 kr,
som kan betales ned månedlig slik at jeg kan tjene profitt på arbeidet. Etter
endt arbeid vil løsningen i sin helhet være deres. En liten løsning pleier som
regel å ligge på rundt 100 000 kr til 150 000 kr; her får de en rabatt på 50 %
ettersom det er en nyutdannet lærling som utfører løsningen. Det skal også
legges opp til at den kan videreutvikles, så de vil få klare, men ikke ferdige
filer. Her er også Vercel et mørketall, ettersom du selv må diskutere med
bedriften hva som trengs, men etter Pro-planen vil prisen ligge på 20 $, som
omgjøres til 220 kr. Her kan vi også ha addons for å se Speed Insights eller
annen nyttig informasjon. Dette må tas med kunden hva hen ønsker.

 
 

 
Blå:
Admin-strøm
Grønn: Bruker-strøm
Rød: Admin- og bruker-strøm
Hvit: Ingen eierskap
 
Her kan vi se at når man logger inn, logger man enten inn
som en bruker eller admin-bruker. Systemet vil kalle på informasjonen fra
databasen, som deretter går videre til backenden, hvor vi passer på at
ingenting av informasjonen kan bli åpnet av nettsiden eller lekke ut til
nettsidens inspect tool. Data skal være kryptert og separat, og bare vises når
det trengs. Altså at den gjør et kall til databasen når brukeren trenger
informasjonen. Det enklere valget kunne ha vært å cache informasjonen, men
ettersom dette ikke høres ut som et stort selskap, skal vi unngå tidskostnadene
ved å ikke cache informasjonen.

Kryptering:
Vi krypterer bare email og hasher passordet. Vi gjør bare
denne dataen for og spare på tid med kryptering og dekryptering men holder også
email som er tilknyttet til passord hemmlig. Dersom bedriften ikke virker som
at dem jobber med en utsatt gruppe krypterer vi ikke navn. Vi krypterer nemmlig
email for og sikre oss om at vis det blir en lekasje så vil ikke dems bedrift
emailer ligge åpent for noen. Dette hjelper med og ikke få spam emailer men
også kan gjøre det mer betryggene for at dataen din ikke blir delt videre og at
du ikke blir skrevet opp til spam emailer for og overbelaste mailen din fra en
dårlig aktør.

Inspect tool: 
Hadde vi åpent spurt fra frontenden til databasen kan man
bruke inspect tool og consol loggen til og gjøre spørringer til databasen dette
er et stort nei dersom dataen skal ikke være tilgjengelig for en dårlig aktør.
Hadde du vært en dårlig aktør så kunne du da ha hentet ut all person dataen med
en simpel consoll log. Dette kan vi stoppe med en backend som ikke bare  krypterer men hasher og input validater og
sepererer et til steg fra database til frontend. 

Generel sikkerhet: 
Vi sjekker hver et kall vi sender til backenden for både
kode og for hvem som er logget på. For eksempel logger du på med en bruker skal
det aldri være en mulighet for og hente ut data som ikke handler om den
innloggete.

Hvordan skal denne brukes?:
Bruker:
Skal kunne gå inn på siden med enten telefon eller pc. Her
skal di først se en log inn skjerm. Etter logg inn blir di dratt til
arrengmenter. Her skal di kunne scrolle gjennom arengmentene. Hvis på pc skal
hen kunne også se kalender og velge dato. Når et arrengemang blir plukket vil
hen få opp en modal med en form hvor di kan skrive ned informasjonen sin eller
bruke informasjonen hentet fra log inn for og spare tid. Den infoen skal
utfylle seg automatisk og etter autofyll får di åpent valg om og endre
informasjonen. Di kan også klikke på et person icon i høgre hjørne for og endre
noe informasjon for eksempel bilde eller kjønn her skal også dems egen hjelpe
id komme opp viss di vil endre ting som fødsels dato må di ringe inn til it
eller admin og gi hjelpe id’en så man kan finne raskt til endringer

Admin:
Har samme log in men vil få tal på påmeldte og ha en fane
til som er admin kontrols her kan di velge en person eller arrengemang og
ekspotere lagret data. Ved hjelp av hjelpe id’en skal hen kunne søke lett opp
en person for og endre informasjon eller omstille for eksempel passord
(omstille passord her vil da si at under neste inlogging vil bruker få en modal
opp for og bytte passord)
 

Tidsplan:
Dag 1: planlegging
Dag 2: korrigering av plan i første halvdel til akseptert.
Derreter oppset av frontend, det vil da si test data lages i json filer og skal
lage frontend hel fullsstendig med bein små design men ikke finalen av design
mobil version fikses først. Det vil si log inn skal kunne logges inn på og
dashbord skal vise arrengmenter samt vis en admin bruker skal gi et valg til og
gå til admin dashbord
Dag 3: blir forsettelse på koding av frontend til alt
innhold er på plass før vi setter litt mer styling inn så den er lett
navigerbar. Derreter sette opp en node backend og tilknytte til database
Dag 4-5: blir brukt til og sette opp backenden og bytte ut
testdata med virklig data. Sette opp sikkehets løsninger her er det viktig at
alt kjører som det skal og skal bli testet for om informasjon går inn og ut
riktig.
Dag 6: her skal finpussing på design og presentasjons
forbredelser bli gjort med live demo i tankene
Dag 7: demo prosjektet blir presentert og etterpå skrevet
selv refleksjon på prossensen gjennom arbeidet

Data lagring:
Arrengment:
Her skal vi hente inn informasjon som er nyttig
-           Tittel 
-           Eventuelt bilde eller default bilde om ingen
opplastet 
-           Description 
-           ID
-           Antall påmeldte (og indetifikasjons id så du kan
se hvem)
-           Tid
-           Dato
-           createdAt
Her henter vi dato og tid seperat dersom jeg ønsker at det
skal være lettere med tids generering i frontenden for eventuell videre
utvikling. Disse skal også vises seperat i frontenden

 
Her er et eksempel på hvordan jeg planlegger og sette opp
kortene med hvor dato skal plasseres for den åpne modalen på venstre side om du
så er admin skal du kunne endre informasjonen og antall påmeldte kommer opp for
en vanlig bruker vil ikke dette komme opp. Mer knappen skal bli et ikon som
klart sier klikk her men for sikkerhets skyld skal jeg gjøre hele kortene
klikbare 

Person
-           Navn (string)
-           Etternavn (string)
-           ID (skal matche med USER id) (string)
-           Fødselsdato (datetime)
-           createdAt
her henter vi fødsels dato så du kan passe på at alle er
gammel nok til data for eksempel vis alkohol blir servert.

USER:
-           Email
-           Passord (hashet)
-           ID (skal matche med person id)
Eksportering:
Dataen som er over utenom USER skal kunne expoteres i cvs og
xlsx. Vi exporterer til hoved mål til xlsx (excel) men legger støtte opp for
cvs. Cvs støtte gir vi dermed da kan man legge til funksjon til google sheets
men også i framtiden om excel ikke blir brukt mer har man et mer robust system
(cvs) som vil holde lengre og mangen nyere regne ark gir støtte for importering
av cvs f.eks libre office, excel, google sheets osv. cvs er også lettere lest
en plain text filer med data og lettere og lage verktøy som kan conventere
rundt dette.
 
Expoteringen skal gjøre et kall til backenden for
informasjon og når den har blitt lagret kaste vekk denne informasjonen. Vi
lagrer ikke ovenfor hvor mange ganger du ekspoterer heller ikke hva som ble
ekspotert. Vi lagrer da når di ble laget. For både sorterings grunlag men som
også et felt som vil bli ekspotert

Design:
Brukervennlighet:
Vi bruker WCAG 2 standarden. Hvor
hoved fokuset blir på farge bruk og navigasjon. Med visuelle hjelpe midler for
og vise hva som kan trykkes og ikke. 
Designet vil være minimalist
dersom en løsning som dette ikke trenger mye styling. Det vil si at vi har lite
farge bytte, men passer fortsatt at kontrasten er høg nok til at vi kan se
forskjell. Vi setter som mål og få AA og AAA hvor det lar seg gjøres men hoved
målet er AA via WCAG. Jeg vil kontuerlig kjøre siden gjennom https://www.accessibilitychecker.org/
som vil passe på at vi holder WCAG standarden men også sjekke 50+ Accessibility
features. Som f.eks. Aria labels men vil kreve meg og gjøre manuell sjekk på et
par prinsipper. 
Det vil være en darkmode og
lightmode som skal være lett byttet i Brukerens innstillinger. Men også først
vil hente fra datamaskinens standard innstilling via CSS.

Kort info:
 
Teknologi: Next.js, Node, Microsoft SQL Server,
Debian 13
Hosting: Uniweb, Vercel
Krav: Admin-dashboard, arrangementside,
brukerinformasjon, logg inn
 
Løsningen skal holdes lett og skal ikke inneholde
unødvendige funksjoner. Koden skal være dynamisk og lett å endre på, med gode
kommentarer som reduserer arbeidet for en eventuell switch av kodespråk fra
JavaScript til TypeScript. Vi holder oss unna caching med mindre det blir laget
en app. Vi overkompliserer ikke backenden med et nytt språk, ettersom
JavaScript holder for funksjonaliteten vi ønsker. Vi kan heller i fremtiden se
på å bytte til et mer low-level språk som C#, men vi vil ikke merke mye
forskjell i hastighet på en løsning som dette.
 

 

KILDER:
Utdanning.no (2026, 19.08) Lønn etter fagbrev https://utdanning.no/yrker/beskrivelse/it-utvikler_fagbrev
 
Uniweb (2026, 19.08) Hosting pris https://www.uniweb.no/hosting/vps/?_gl=1*19vqqak*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7uCyZMJBxozJpkl2YOIhpmWFvbGo9Frfr-KryYyLSYiv6VnfqHJtqxoCUqgQAvD_BwE&gbraid=0AAAAAD_CJbxSmzsgakguhQjDNH5S7YPbE
 
Vercel (2026, 19.08) Pro pris  https://vercel.com/docs/plans/pro-plan
Wcag (2026, 20.08) dokumentasjon
på wcag 2.0 https://www.w3.org/TR/WCAG22/

kan du kunn rettskrive og ikke endre noe innhold til norsk bokmål i et word format og ikke markdown


gemini Flash 3.6 (21.08.2026):
Løsning i sin helhet:
Arrangement-, kurs- og infomøte-app.

Administrasjonsgrensesnitt:
Her vurderes det å legge opp en superbruker kun for bruk på PC. Ettersom hovedfunksjonen er eksportering av filer, vil mobilversjonen ikke være tilstrekkelig, med mindre arbeidsplassen har en egen printer koblet til nettet. Mobilversjonen vil her være et betraktelig mindre skjelett av web-versjonen.

Betaling?:
Ingen krav ennå, men å gjøre det klart for implementering blir planen. Lage funksjonen og deretter låse den. Her vil vi ikke få støtte for Vipps, og dermed må vi ha en aktiv løsning. Legge til en tom omdirigering (redirect) som senere kan fylles med betalingsmåter. Eventuelt få PayPal-API-et til å fungere, da dette lager en egen prosess som jeg bare trenger å lenke til – men bare under testversjonen.

Plan

Mål:
Lage en enkel løsning for bedriften for å holde orden på arrangementer og holde styr på hvem som kommer, i en lett eksporterbar fil. Den skal være lett å navigere i og redusere tiden brukt på manuelt arbeid så mye som mulig.

Avgrensninger:
Betaling:
Vi lager ikke betaling dersom det krever et aktivt produkt og vi bare ble spurt om muligheten. I stedet lager vi en ruting (routing) og setter opp grunnleggende informasjon i frontenden kun slik at det kan bli implementert senere. Dette vil ikke kreve mye ressurser, men bare åpne for videreutvikling og gjøre jobben lettere når vi kommer så langt. Jeg vil ikke lagre noe betalingsinformasjon av akkurat denne grunnen; å ha det lagret når det ikke er i bruk, vil kreve mer av systemet vårt.

Kravspesifikasjon:
Kravmål:
Felles krav bruker og admin:
Krav_1: Bruker skal logge inn
Krav_2: Endre kjønn og navn
Krav_3: Legge seg selv inn i et arrangement
Krav_4: Bytte passord
ADMIN:
Krav_1: Fjerne person fra arrangement
Krav_2: Sende bekreftelse på passordendring
Krav_3: Endre personinfo
Krav_4: Eksportere arrangementsinfo

Hva trengs for å fullføre?:

* 1 PC
* Uniweb VPS-server
* Vercel-server
* Figma-lisens
* Code Editor-lisens
* Testtelefon
* 1–3 testere

Språk:
Next.js, Node, JS, SQL Server

Next.js: Dette er et nymoderne rammeverk som bygger ganske godt på React, men har allerede en ruter og lett integrasjon med backenden.
Node: Backend-biten vil være skrevet i Node for ikke å blande for mye teknologi, og for å gjøre det lettere for andre programmerere å skjønne løsningen i sin helhet, ettersom Node bruker JS. Den fungerer også flott med Next.js.
JS: Vi bruker JavaScript som hovedspråk ettersom dette er et lett språk og hovedspråket til nettleseren. Vi kunne fått litt ekstra støtte med TypeScript i stedet, men for å unngå fellen med at prosjektet tar for lang tid, skrives den i JavaScript. Det skal kommenteres godt i kodebasen, slik at en eventuell omskrivning ikke vil ta så lang tid.

Ytelse:
Programmet skal være så raskt som mulig å laste, ettersom de fleste apper bruker veldig liten tid på å klikke rundt. Eventuelle tanker om å splitte opp appen for React Native bør holdes i bakhodet.

Kostnad:
Begynnerlønn for en med fagbrev er rundt 32 259 kr i måneden. Hvis vi beregner en måned som 5 arbeidsdager i uken og 8 timers arbeidsdag, sitter vi med 201 kr i timen. Prosjektet skal vare i syv dager. Da vil fullstendig lønn på dette prosjektet være 11 256 kr.

Vi bruker også Uniweb VPS for hosting av backend og database. Dette gjør vi fordi de har en rimelig pris hvor vi kan kjøre en SQL Server i Debian 13, som bare vil koste oss 220 kr i måneden. Her åpner vi også for skalering, men blir da låst etter hvert. Om vi skalerer utenfor Norge, vil egenhosting (self-hosting) bli den beste ideen. Men siden vi allerede har rammene klare for hvordan den skal bygges opp, skal ikke en overføring ta så lang tid.

Vi vil nok hoste nettsiden via Vercel, ettersom Vercel utviklet Next.js og har best støtte for dette. Vi splitter disse to opp i forskjellige hostingtjenester dersom det blir for dyrt å kjøre alt gjennom én hostingtjeneste. Går vi for en norsk server, vil vi miste den gode tilknytningen til Vercel som vi ønsker å beholde. Vi passer også på at hvis vi får en lekkasje i Vercel, har vi Uniweb å lene oss på. Uniweb er imidlertid ikke sterk nok til at vi kan hoste nettsiden der også uten ekstra kostnader. Går Vercel ned, kan vi lage en backupplan. Går Uniweb ned, er det litt mer krise. De lover også 99,98 % oppetid (runtime) og forholder seg til norske regler for databehandling.

Her setter jeg også opp en vedlikeholdspris for et år, som vil si at du får omtrent 48 dager med vedlikehold av kodebasen. Dette tar jeg med i prisingen, ettersom man ikke kan planlegge for alle feil i begynnelsen. Eventuelle feil (bugs) som trenger fiksing, og mer tid for en in-house fullstacker til å ta over prosjektet. Jeg setter også en fastpris på løsningen på 50 400 kr, som kan betales ned månedlig slik at jeg kan tjene profitt på arbeidet. Etter endt arbeid vil løsningen i sin helhet være deres. En liten løsning pleier som regel å ligge på rundt 100 000 kr til 150 000 kr; her får de en rabatt på 50 % ettersom det er en nyutdannet lærling som utfører løsningen. Det skal også legges opp til at den kan videreutvikles, så de vil få klare, men ikke ferdige filer. Her er også Vercel et mørketall, ettersom du selv må diskutere med bedriften hva som trengs, men etter Pro-planen vil prisen ligge på 20 $, som omgjøres til 220 kr. Her kan vi også ha tillegg (add-ons) for å se Speed Insights eller annen nyttig informasjon. Dette må tas med kunden i henhold til hva vedkommende ønsker.

Blå: Admin-strøm
Grønn: Bruker-strøm
Rød: Admin- og bruker-strøm
Hvit: Ingen eierskap

Her kan vi se at når man logger inn, logger man enten inn som en bruker eller som en admin-bruker. Systemet vil kalle på informasjonen fra databasen, som deretter går videre til backenden, hvor vi passer på at ingenting av informasjonen kan åpnes av nettsiden eller lekke ut til nettsidens inspeksjonsverktøy (Inspect Tool). Data skal være kryptert og separert, og bare vises når det trengs. Altså at den gjør et kall til databasen når brukeren trenger informasjonen. Det enklere valget kunne ha vært å mellomlagre (cache) informasjonen, men ettersom dette ikke høres ut som et stort selskap, skal vi unngå tidskostnadene ved å ikke mellomlagre informasjonen.

Kryptering:
Vi krypterer bare e-post og hasher passordet. Vi gjør dette bare med denne dataen for å spare tid på kryptering og dekryptering, men holder også e-post som er tilknyttet passordet hemmelig. Dersom bedriften ikke virker som om den jobber med en utsatt gruppe, krypterer vi ikke navn. Vi krypterer nemlig e-post for å sikre oss at hvis det blir en lekkasje, så vil ikke bedriftens e-poster ligge åpent for noen. Dette hjelper mot å få søppelpost (spam), men det kan også gjøre det mer betryggende at dataen din ikke blir delt videre, og at du ikke blir skrevet opp på spam-lister for å overbelaste e-posten din fra en ondsinnet aktør.

Inspeksjonsverktøy (Inspect tool):
Hadde vi fra frontenden spurt direkte mot databasen, kunne man brukt inspeksjonsverktøyet og konsoll-loggen til å gjøre spørringer mot databasen. Dette er et stort nei, ettersom dataen ikke skal være tilgjengelig for en ondsinnet aktør. Hadde du vært en ondsinnet aktør, kunne du da ha hentet ut all persondata med en enkel konsoll-logg. Dette kan vi stoppe med en backend som ikke bare krypterer, men hasher og input-validerer, samt separerer enda et steg fra database til frontend.

Generell sikkerhet:
Vi sjekker hvert kall vi sender til backenden for både kode og for hvem som er logget på. For eksempel: Logger du på med en bruker, skal det aldri være en mulighet for å hente ut data som ikke handler om den innloggede.

Hvordan skal denne brukes?:
Bruker:
Skal kunne gå inn på siden med enten telefon eller PC. Her skal de først se en innloggingsskjerm. Etter innlogging blir de tatt til arrangementer. Her skal de kunne bla (scrolle) gjennom arrangementene. Hvis vedkommende er på PC, skal hen også kunne se kalender og velge dato. Når et arrangement blir valgt, vil hen få opp en modal med et skjema hvor de kan skrive ned informasjonen sin, eller bruke informasjonen hentet fra innloggingen for å spare tid. Den infoen skal fylle seg ut automatisk, og etter autofyll får de et åpent valg om å endre informasjonen. De kan også klikke på et personikon i høyre hjørne for å endre noe informasjon, for eksempel bilde eller kjønn. Her skal også deres egen hjelp-ID komme opp; hvis de vil endre ting som fødselsdato, må de ringe inn til IT eller admin og oppgi hjelp-ID-en slik at man raskt kan finne frem til endringene.

Admin:
Har samme innlogging, men vil få tall på påmeldte og ha en fane til som er admin-kontroller. Her kan de velge en person eller et arrangement og eksportere lagret data. Ved hjelp av hjelp-ID-en skal hen enkelt kunne søke opp en person for å endre informasjon eller tilbakestille for eksempel passord. (Å tilbakestille passord her vil da si at under neste innlogging vil brukeren få opp en modal for å bytte passord).

Tidsplan:
Dag 1: Planlegging
Dag 2: Korrigering av plan i første halvdel til den er akseptert. Deretter oppsett av frontend. Det vil si at testdata lages i JSON-filer, og det skal lages en helt fullstendig frontend med et enkelt og spinkelt design, men ikke det endelige designet. Mobilversjon fikses først. Det vil si at innlogging skal kunne benyttes, og dashbordet skal vise arrangementer samt – hvis det er en admin-bruker – gi et valg om å gå til admin-dashbordet.
Dag 3: Fortsettelse på koding av frontend til alt innhold er på plass før vi legger inn litt mer styling slik at den er lett navigerbar. Deretter sette opp en Node-backend og koble den til databasen.
Dag 4–5: Brukes til å sette opp backenden og bytte ut testdata med virkelige data. Sette opp sikkerhetsløsninger. Her er det viktig at alt kjører som det skal, og det skal testet om informasjon går riktig inn og ut.
Dag 6: Finpussing på design og presentasjonsforberedelser med live-demo i tankene.
Dag 7: Demo-prosjektet presenteres, og deretter skrives en egenrefleksjon om prosessen gjennom arbeidet.

Datalagring:
Arrangement:
Her skal vi hente inn informasjon som er nyttig:

* Tittel
* Eventuelt bilde eller standardbilde (default) om intet er lastet opp
* Beskrivelse (Description)
* ID
* Antall påmeldte (og identifikasjons-ID så du kan se hvem)
* Tid
* Dato
* opprettetDato (createdAt)
Her henter vi dato og tid separert ettersom jeg ønsker at det skal være lettere med tidsgenerering i frontenden for eventuell videreutvikling. Disse skal også vises separert i frontenden.

Her er et eksempel på hvordan jeg planlegger å sette opp kortene med hvor dato skal plasseres for den åpne modalen på venstre side. Om du er admin, skal du kunne endre informasjonen, og antall påmeldte kommer opp. For en vanlig bruker vil ikke dette komme opp. «Mer»-knappen skal bli et ikon som klart sier «klikk her», men for sikkerhets skyld skal jeg gjøre hele kortene klikkbare.

Person:

* Navn (string)
* Etternavn (string)
* ID (skal matche med USER-ID) (string)
* Fødselsdato (datetime)
* opprettetDato (createdAt)
Her henter vi fødselsdato så du kan passe på at alle er gamle nok for arrangementet, for eksempel hvis alkohol blir servert.

USER:

* E-post
* Passord (hashet)
* ID (skal matche med person-ID)

Eksportering:
Dataen over, unntatt USER, skal kunne eksporteres i CSV og XLSX. Hovedmålet vårt er å eksportere til XLSX (Excel), men vi legger også opp støtte for CSV. CSV-støtte gjør at man kan legge til funksjoner mot Google Sheets, men også i fremtiden dersom Excel ikke lenger brukes, har man et mer robust system (CSV) som vil holde lengre. Mange nyere regneark har støtte for importering av CSV, f.eks. LibreOffice, Excel, Google Sheets osv. CSV er også lettere å lese enn rene tekstfiler med data, og det er lettere å lage verktøy som kan konvertere dette.

Eksporteringen skal gjøre et kall til backenden etter informasjon, og når den har blitt lagret, skal denne informasjonen kastes. Vi lagrer ikke hvor mange ganger du eksporterer, og heller ikke hva som ble eksportert. Vi lagrer når de ble laget, både som sorteringsgrunnlag og som et felt som vil bli eksportert.

Design:
Brukervennlighet:
Vi bruker WCAG 2-standarden, hvor hovedfokuset blir på fargebruk og navigasjon, med visuelle hjelpemidler for å vise hva som kan trykkes på og ikke.
Designet vil være minimalistisk ettersom en løsning som dette ikke trenger mye styling. Det vil si at vi har få fargebytter, men passer fortsatt på at kontrasten er høy nok til at vi kan se forskjell. Vi setter som mål å nå AA og AAA hvor det lar seg gjøre, men hovedmålet er AA via WCAG. Jeg vil kontinuerlig kjøre siden gjennom [https://www.accessibilitychecker.org/](https://www.accessibilitychecker.org/), som vil passe på at vi holder WCAG-standarden og sjekke over 50 tilgjengelighetsfunksjoner (f.eks. ARIA-labels), men det vil også kreve at jeg gjør manuell sjekk på et par prinsipper.
Det vil være mørk modus (darkmode) og lys modus (lightmode) som enkelt kan byttes i brukerens innstillinger, men som først hentes fra datamaskinens standardinnstilling via CSS.

Kort info:

Teknologi: Next.js, Node, Microsoft SQL Server, Debian 13
Hosting: Uniweb, Vercel
Krav: Admin-dashbord, arrangementside, brukerinformasjon, innlogging

Løsningen skal holdes lett og skal ikke inneholde unødvendige funksjoner. Koden skal være dynamisk og lett å endre på, med gode kommentarer som reduserer arbeidet ved et eventuelt bytte av kodespråk fra JavaScript til TypeScript. Vi holder oss unna mellomlagring (caching) med mindre det blir laget en app. Vi overkompliserer ikke backenden med et nytt språk, ettersom JavaScript er tilstrekkelig for funksjonaliteten vi ønsker. Vi kan heller i fremtiden se på å bytte til et mer lavnivåspråk som C#, men vi vil ikke merke mye forskjell i hastighet på en løsning som dette.

KILDER:
Utdanning.no (2026, 19.08) Lønn etter fagbrev [https://utdanning.no/yrker/beskrivelse/it-utvikler_fagbrev](https://utdanning.no/yrker/beskrivelse/it-utvikler_fagbrev)

Uniweb (2026, 19.08) Hosting pris [https://www.uniweb.no/hosting/vps/?_gl=1*19vqqak*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwqJXUBhBNEiwA8BgG7uCyZMJBxozJpkl2YOIhpmWFvbGo9Frfr-KryYyLSYiv6VnfqHJtqxoCUqgQAvD_BwE&gbraid=0AAAAAD_CJbxSmzsgakguhQjDNH5S7YPbE](https://www.google.com/search?q=https%3A%2F%2Fwww.uniweb.no%2Fhosting%2Fvps%2F%3F_gl%3D1*19vqqak*_up*MQ..*_gs*MQ..%26gclid%3DCjwKCAjwqJXUBhBNEiwA8BgG7uCyZMJBxozJpkl2YOIhpmWFvbGo9Frfr-KryYyLSYiv6VnfqHJtqxoCUqgQAvD_BwE%26gbraid%3D0AAAAAD_CJbxSmzsgakguhQjDNH5S7YPbE)

Vercel (2026, 19.08) Pro pris [https://vercel.com/docs/plans/pro-plan](https://vercel.com/docs/plans/pro-plan)

WCAG (2026, 20.08) Dokumentasjon på WCAG 2.0 [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)