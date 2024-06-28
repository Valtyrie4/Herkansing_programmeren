console.log("Console log is altijd handig om als eerste te doen");

// Hier staan de constanten 
const naam = document.querySelector("#naamInvullen");
const buttonNaam = document.querySelector("#buttonNaam");
const h1 = document.querySelector("h1");
const hintP = document.querySelector("#hint");
const Nijntje = document.querySelector("#Nijntje");
const buttonBallon = document.querySelector("#buttonBallon");
const buttonBal = document.querySelector('#buttonBal');
const buttonFietsen = document.querySelector('#buttonFietsen');
const buttonZumba = document.querySelector('#buttonZumba');

// alle gifjes zijn van https://giphy.com/Nijntje

// let
let gebruikersnaam;
let energieBar = 90;

// De gebruikte functies staan hieronder.
// bij deze function zorg ik ervoor dat het plaatje van Nijntje veranderd in een plaatje 
// dat ze aan het spelen is met de ballon wanneer je op de button klikt. 
// ook zorg ik ervoor dat als er op de button wordt geklikt haar saamhorigheidsgevoel omhoog gaat.
function Ballon() {
    console.log("Nijntje speelt met haar ballon");
    Nijntje.src = "gif/ballon.gif";
    kleiner(10);
}

// bij deze function zorg ik ervoor dat het plaatje van Nijntje veranderd in een plaatje
// dat ze aan het spelen is met Ginny en een bal wanneer je op de button klikt.
// ook zorg ik ervoor dat haar saamhorigheidsgevoel met 5 omhoog gaat als er op de button wordt geklikt.
function Bal() {
    console.log("Nijntje speelt met de bal");
    Nijntje.src = "gif/bal.gif";
    groter(5);
}

// bij deze function zorg ik ervoor dat het plaatje van Nijntje veranderd in een plaatje
// dat ze aan het fietsen is wanneer je op de button klikt.
// ook zorg ik ervoor dat haar energie omlaag gaat met 5 ze alleen fietst. Daar krijgt Nijntje minder een saamhorigheidsgevoel van.
function Fietsen() {
    console.log("Nijntje is een echte Nederlander");
    Nijntje.src = "gif/Fietsen.gif";
    kleiner(5);
}

// bij deze function zorg ik ervoor dat het plaatje van Nijntje veranderd in een plaatje
// dat ze aan het springen is dansen is wanneer je op de button klikt.
function Zumba() {
    console.log("Nijntje doet zumba, super healthy ofcourse");
    Nijntje.src = "gif/springen.gif";
}

// door deze function kan je wanneer je je naam hebt ingevuld in de form je naam tussen de 
// rest van de tekst zien.
function logInput() {
    gebruikersnaam = naam.value;
    h1.textContent = "Hoi, " + gebruikersnaam + ". Ik ben Nijntje";
}

// bij deze function zorg ik ervoor dat de saamhorigheidsgevoelmeter van Nijntje voller raakt wanneer je 
// bepaalde dingen met haar uitvoert en op die buttons klikt.

// ook zorg ik er hiermee voor dat de energiebar niet te vol kan komen.
function groter(waardePlus) {
    if (energieBar >= 0 && energieBar < 90) {
        energieBar += waardePlus;
        updateBar();
    } else {
        energieBar = 90;
        hintP.textContent = "Zullen we weer wat gaan doen?";
        setTimeout(hideHint, 3000);
    }
}

// bij deze function zorg ik ervoor dat de saamhorigheidsgevoelmeter van Nijntje leger raakt wanneer je 
// bepaalde dingen met haar uitvoert en op die buttons klikt. 
// ook zorg ik er hiermee voor dat de energiebar niet te leeg kan komen, dus in de min. 
function kleiner(waardeMin) {
    if (energieBar > 5 && energieBar <= 90) {
        energieBar -= waardeMin;
        updateBar();
    } else {
        energieBar = 5;
        hintP.textContent = "Nijntje mist Ginny";
        setTimeout(hideHint, 3000);
    }
}

// bij deze function zorg ik ervoor dat de energiebar van Nijntje elke keer wordt ge-update na het
// klikken van bepaalde buttons. 
function updateBar() {
    document.querySelector("#progressBinnen").style.width = energieBar + "%";
}

// bij deze function zorg ik ervoor dat er audio wordt afgespeeld die ik onder de button "Zumba" heb gezet.
function play() {
    const audio = new Audio('Liefkleinkonijntje.mp3');
    audio.play();
}

// bij deze function zorg ik ervoor dat er gelijk in het begin een hint verschijnt dat Nijntje iets wilt gaan doen.
// die hint gaat na 5 sec weer weg en komt de algemene tekst er te staan. 
function showHint() {
    hintP.textContent = "Nijntje wilt iets gaan doen";
    setTimeout(hideHint, 5000);
}

// bij deze function zorg ik ervoor dat de algemene tekst waar ik het hierboven over had verschijnt op de 
// plek waar eerst de hint stond.
function hideHint() {
    hintP.textContent = "Wat wil je dat Nijntje gaat doen?";
}

showHint();

// eventlisteners
buttonBallon.addEventListener('click', Ballon);
buttonBal.addEventListener('click', Bal);
buttonFietsen.addEventListener('click', Fietsen);
buttonZumba.addEventListener('click', Zumba);
buttonZumba.addEventListener('click', play);
buttonNaam.addEventListener('click', logInput);


