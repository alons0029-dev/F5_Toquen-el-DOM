/* DECLARAR VARIABLES */

// Nota C3 (Do3)
const doNote = document.getElementById("doN");
let doNoteAudio = new Audio("/assets/studio-grand-samples/013_studio-grand-c3.mp3");

// Nota Db3 (Reb3)
const doSosNote = document.getElementById("doSosN");
let doSosNoteAudio = new Audio("/assets/studio-grand-samples/014_studio-grand-db3.mp3");

// Nota D3 (Re3)
const reNote = document.getElementById("reN");
let reNoteAudio = new Audio("/assets/studio-grand-samples/015_studio-grand-d3.mp3");

// Nota Eb3 (Mib3)
const reSosNote = document.getElementById("reSosN");
let reSosNoteAudio = new Audio("/assets/studio-grand-samples/016_studio-grand-eb3.mp3");

// Nota E3 (Mi3)
const miNote = document.getElementById("miN");
let miNoteAudio = new Audio("/assets/studio-grand-samples/017_studio-grand-e3.mp3");

// Nota F3 (Fa3)
const faNote = document.getElementById("faN");
let faNoteAudio = new Audio("/assets/studio-grand-samples/018_studio-grand-f3.mp3");

// Nota Gb3 (Solb3)
const faSosNote = document.getElementById("faSosN");
let faSosNoteAudio = new Audio("/assets/studio-grand-samples/019_studio-grand-gb3.mp3");

// Nota G3 (Sol3)
const solNote = document.getElementById("solN");
let solNoteAudio = new Audio("/assets/studio-grand-samples/020_studio-grand-g3.mp3");

// Nota Ab3 (Lab3)
const solSosNote = document.getElementById("solSosN");
let solSosNoteAudio = new Audio("/assets/studio-grand-samples/021_studio-grand-ab3.mp3");

// Nota A3 (La3)
const laNote = document.getElementById("laN");
let laNoteAudio = new Audio("/assets/studio-grand-samples/022_studio-grand-a3.mp3");

// Nota Bb3 (Sib3)
const laSosNote = document.getElementById("laSosN");
let laSosNoteAudio = new Audio("/assets/studio-grand-samples/023_studio-grand-bb3.mp3");

// Nota B3 (Si3)
const siNote = document.getElementById("siN");
let siNoteAudio = new Audio("/assets/studio-grand-samples/024_studio-grand-b3.mp3");

// Nota C4 (Do4)
const do8Note = document.getElementById("do8N");
let do8NoteAudio = new Audio("/assets/studio-grand-samples/025_studio-grand-c4.mp3");

/* FUNCIONES */

// Nota C3 (Do3)
function doNotePlay() {
    doNoteAudio.play();
};

// Nota Db3 (Reb3)
function doSosNotePlay() {
    doSosNoteAudio.play();
};

// Nota D3 (Re3)
function reNotePlay() {
    reNoteAudio.play();
};

// Nota Eb3 (Mib3)
function reSosNotePlay() {
    reSosNoteAudio.play();
};

// Nota E3 (Mi3)
function miNotePlay() {
    miNoteAudio.play();
};

// Nota F3 (Fa3)
function faNotePlay() {
    faNoteAudio.play();
};

// Nota Gb3 (Solb3)
function faSosNotePlay() {
    faSosNoteAudio.play();
};

// Nota G3 (Sol3)
function solNotePlay() {
    solNoteAudio.play();
};

// Nota Ab3 (Lab3)
function solSosNotePlay() {
    solSosNoteAudio.play();
};

// Nota A3 (La3)
function laNotePlay() {
    laNoteAudio.play();
};

// Nota Bb3 (Sib3)
function laSosNotePlay() {
    laSosNoteAudio.play();
};

// Nota B3 (Si3)
function siNotePlay() {
    siNoteAudio.play();
};

// Nota C4 (Do4)
function do8NotePlay() {
    do8NoteAudio.play();
};

/* EVENTO Click */

// Nota C3 (Do3)
doNote.addEventListener("click", doNotePlay);

// Nota Db3 (Reb3)
doSosNote.addEventListener("click", doSosNotePlay);

// Nota D3 (Re3)
reNote.addEventListener("click", reNotePlay);

// Nota Eb3 (Mib3)
reSosNote.addEventListener("click", reSosNotePlay);

// Nota E3 (Mi3)
miNote.addEventListener("click", miNotePlay);

// Nota F3 (Fa3)
faNote.addEventListener("click", faNotePlay);

// Nota Gb3 (Solb3)
faSosNote.addEventListener("click", faSosNotePlay);

// Nota G3 (Sol3)
solNote.addEventListener("click", solNotePlay);

// Nota Ab3 (Lab3)
solSosNote.addEventListener("click", solSosNotePlay);

// Nota A3 (La3)
laNote.addEventListener("click", laNotePlay);

// Nota Bb3 (Sib3)
laSosNote.addEventListener("click", laSosNotePlay);

// Nota B3 (Si3)
siNote.addEventListener("click", siNotePlay);

// Nota C4 (Do4)
do8Note.addEventListener("click", do8NotePlay);

/* EVENTO Notas Teclado */
document.addEventListener("keydown", (event) => {
    switch (event.key) {

        // Nota C3 (Do3)
        case 'a':
        case 'A':
        case '65':
            doNotePlay();
            break;
    
        // Nota Db3 (Reb3)
        case 'w':
        case 'W':
        case '87':
            doSosNotePlay();
            break;

        // Nota D3 (Re3)
        case 's':
        case 'S':
        case '83':
            reNotePlay();
            break;

        // Nota Eb3 (Mib3)
        case 'e':
        case 'E':
        case '69':
            reSosNotePlay();
            break;

        // Nota E3 (Mi3)
        case 'd':
        case 'D':
        case '68':
            miNotePlay();
            break;
        
        // Nota F3 (F3)
        case 'f':
        case 'F':
        case '70':
            faNotePlay();
            break;
        
        // Nota Gb3 (Solb3)
        case 't':
        case 'T':
        case '84':
            faSosNotePlay();
            break;

        // Nota G3 (Sol3)
        case 'g':
        case 'G':
        case '71':
            solNotePlay();
            break;

        // Nota Ab3 (Lab3)
        case 'y':
        case 'Y':
        case '89':
            solSosNotePlay();
            break;

        // Nota A3 (La3)
        case 'h':
        case 'H':
        case '72':
            laNotePlay();
            break;
        
        // Nota Bb3 (Sib3)
        case 'u':
        case 'U':
        case '85':
            laSosNotePlay();
            break;

        // Nota B3 (Si3)
        case 'j':
        case 'J':
        case '74':
            siNotePlay();
            break;

        // Nota C4 (Do4)
        case 'k':
        case 'K':
        case '75':
            do8NotePlay();
            break;

        // Cualquier otra tecla no hace nada
        default:
            break;
    };
});