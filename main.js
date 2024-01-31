// Global variables go here
var canvas;

var c = document.getElementById("keyC");
var cSdB = document.getElementById("keyCS");
var d = document.getElementById("keyD");
var dSeB = document.getElementById("keyDS");
var e = document.getElementById("keyE");
var f = document.getElementById("keyF");
var fSgB = document.getElementById("keyFS");
var g = document.getElementById("keyG");
var gSaB = document.getElementById("keyGS");
var a = document.getElementById("keyA");
var aSbB = document.getElementById("keyAS");
var b = document.getElementById("keyB");

var noteC;
var noteCS;
var noteD;
var noteDS;
var noteE;
var noteF;
var noteFS;
var noteG;
var noteGS;
var noteA;
var noteAS;
var noteB;
var bgColor;
bgColor = 'rgba(255, 255, 255, 0.1)';

let togPoff = document.getElementById("pFButton");
let togPon = document.getElementById("pOButton");

function preload() {
  noteC = loadSound('sound/Piano Middle C-160.mp3');
  noteC.setVolume(0.2);
  noteCS = loadSound('sound/Piano Middle CS-160.mp3');
  noteCS.setVolume(0.2);
  noteD = loadSound('sound/Piano Middle D-160.mp3');
  noteD.setVolume(0.2);
  noteDS = loadSound('sound/Piano Middle DS-160.mp3');
  noteDS.setVolume(0.2);
  noteE = loadSound('sound/Piano Middle E-160.mp3');
  noteE.setVolume(0.2);
  noteF = loadSound('sound/Piano Middle F-160.mp3');
  noteF.setVolume(0.2);
  noteFS = loadSound('sound/Piano Middle FS-160.mp3');
  noteFS.setVolume(0.2);
  noteG = loadSound('sound/Piano Middle G-160.mp3');
  noteG.setVolume(0.2);
  noteGS = loadSound('sound/Piano Middle GS-160.mp3');
  noteGS.setVolume(0.2);
  noteA = loadSound('sound/Piano Middle A-160.mp3');
  noteA.setVolume(0.2);
  noteAS = loadSound('sound/Piano Middle AS-160.mp3');
  noteAS.setVolume(0.2);
  noteB = loadSound('sound/Piano Middle B-160.mp3');
  noteB.setVolume(0.2);
}


function setup() {
  canvas = createCanvas(windowWidth, (windowHeight)).parent("p5-canvas");
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function noteCPlayed() {
  noteC.play();
  bgColor = 'rgba(247, 77, 64, 0.1)';
}

function noteCSPlayed() {
  noteCS.play();
  bgColor = 'rgba(178, 0, 237, 0.1)';
}

function noteDPlayed() {
  noteD.play();
  bgColor = 'rgba(245, 238, 108, 0.1)';
}
function noteDSPlayed() {
  noteDS.play();
  bgColor = 'rgba(119,126,143, 0.1)';
}
function noteEPlayed() {
  noteE.play();
  bgColor = 'rgba(135, 206, 235, 0.1)';
}
function noteFPlayed() {
  noteF.play();
  bgColor = 'rgba(145, 1, 1, 0.1)';
}
function noteFSPlayed() {
  noteFS.play();
  bgColor = 'rgba(0, 184, 212, 0.1)';
}
function noteGPlayed() {
  noteG.play();
  bgColor = 'rgba(242, 178, 15, 0.1)';
}
function noteGSPlayed() {
  noteGS.play();
  bgColor = 'rgba(182, 96, 205, 0.1)';
}
function noteAPlayed() {
  noteA.play();
  bgColor = 'rgba(114, 205, 96, 0.1)';
}
function noteASPlayed() {
  noteAS.play();
  bgColor = 'rgba(192, 14, 76, 0.1)';
}
function noteBPlayed() {
  noteB.play();
  bgColor = 'rgba(0, 87, 237, 0.1)';
}



function draw() {
    background(bgColor);
}

c.addEventListener("click", noteCPlayed);
cSdB.addEventListener("click", noteCSPlayed);
d.addEventListener("click", noteDPlayed);
dSeB.addEventListener("click", noteDSPlayed);
e.addEventListener("click", noteEPlayed);
f.addEventListener("click", noteFPlayed);
fSgB.addEventListener("click", noteFSPlayed);
g.addEventListener("click", noteGPlayed);
gSaB.addEventListener("click", noteGSPlayed);
a.addEventListener("click", noteAPlayed);
aSbB.addEventListener("click", noteASPlayed);
b.addEventListener("click", noteBPlayed);

togPoff.addEventListener("click", () =>  {
    c.style.display = "none";
    cSdB.style.display = "none";
    d.style.display = "none";
    dSeB.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    fSgB.style.display = "none";
    g.style.display = "none";
    gSaB.style.display = "none";
    a.style.display = "none";
    aSbB.style.display = "none";
    b.style.display = "none";
})

togPon.addEventListener("click", () =>  {
    c.style.display = "flex";
    cSdB.style.display = "flex";
    d.style.display = "flex";
    dSeB.style.display = "flex";
    e.style.display = "flex";
    f.style.display = "flex";
    fSgB.style.display = "flex";
    g.style.display = "flex";
    gSaB.style.display = "flex";
    a.style.display = "flex";
    aSbB.style.display = "flex";
    b.style.display = "flex";
})

function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight);
  
}
