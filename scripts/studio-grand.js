/* JS Studio Grand */

// Declarar variables
const doNote = document.getElementById("doN");
let doNoteAudio = new Audio("./piano-samples/013_studio-grand-c3.mp3");

const doSosNote = document.getElementById("doSosN");
const reNote = document.getElementById("reN");
const reSosNote = document.getElementById("reSosN");
const miNote = document.getElementById("miN");
const faNote = document.getElementById("faN");
const faSosNote = document.getElementById("faSosN");
const solNote = document.getElementById("solN");
const solSosNote = document.getElementById("solSosN");
const laNote = document.getElementById("laN");
const laSosNote = document.getElementById("laSosN");
const siNote = document.getElementById("siN");
const do8Note = document.getElementById("do8N");

// Funciones
function doNotePlay() {
    doNoteAudio.play();
}

// Eventos
doNote.addEventListener("click", doNotePlay);









 
 doSosNote.addEventListener("click", doSos_Note)
 reNote.addEventListener("click", re_Note)
 reSosNote.addEventListener("click", reSos_Note)
 miNote.addEventListener("click", mi_Note)
 faNote.addEventListener("click", fa_Note)
 faSosNote.addEventListener("click", faSos_Note)
 solNote.addEventListener("click", sol_Note)
 solSosNote.addEventListener("click", solSos_Note)
 laNote.addEventListener("click", la_Note)
 laSosNote.addEventListener("click", laSos_Note)
 siNote.addEventListener("click", si_Note)
 do8Note.addEventListener("click", do8_Note)


let volumen = document.getElementById('volumen').value
let volumenValue = parseFloat(volumen)

// Tipos de osciladores: 'sine', 'square', 'sawtooth', 'triangle'
function do_Note(volumenValue){

        let o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=130.81;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona");

    }

 function doSos_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=138.59;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function re_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=146.83;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function reSos_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=155.56;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function mi_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=164.81;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function fa_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=174.61;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function faSos_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=185.00;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function sol_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=196.00;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function solSos_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=207.65;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function la_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=220.00;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function laSos_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=233.08;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function si_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=246.94;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }
function do8_Note(){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=293;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
        console.log("funciona")
    }