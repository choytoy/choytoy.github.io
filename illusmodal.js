
//MODAL IMG

//ILLUS
var brew = document.getElementById('brew');
var bugs = document.getElementById('bugs');
var tunnel = document.getElementById('tunnel');
var glow = document.getElementById('glow');
var sus = document.getElementById('sus');
var aud = document.getElementById('aud');
var homeGif = document.getElementById('homeGif');
var fruit = document.getElementById('fruit');
var soda = document.getElementById('soda');

var illusModal = document.getElementById('illusModal');
var illusImg = document.getElementById('illusImg');
var illusCapt = document.getElementById('illusCapt');

soda.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
fruit.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
homeGif.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
aud.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
brew.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
bugs.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
tunnel.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
glow.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}
sus.onclick = function () {
    illusModal.style.display = 'block';
    illusImg.src = this.src;
    illusCapt.innerText = this.alt;
}

illusModal.onclick = function () {
    illusModal.style.display = 'none';
}

//MACRO

var macroModal = document.getElementById('macroModal');
var macroImg = document.getElementById('macroImg');
var macroCapt = document.getElementById('macroCapt');

var amb = document.getElementById('amb');
var bee = document.getElementById('bee');
var cuke = document.getElementById('cuke');
var drgn = document.getElementById('drgn');
var fly = document.getElementById('fly');
var grass = document.getElementById('grass');
var harlq = document.getElementById('harlq');
var seven = document.getElementById('seven');
var saw = document.getElementById('saw');
var cross = document.getElementById('cross');
var paint = document.getElementById('paint');
var sweat = document.getElementById('sweat');
var tarn = document.getElementById('tarn');
var jaw = document.getElementById('jaw');
var jump = document.getElementById('jump');

var ambP = document.getElementById('picAmb');
var beeP = document.getElementById('picBee');
var cukeP = document.getElementById('picCuke');
var drgnP = document.getElementById('picClub');
var flyP = document.getElementById('picFly');
var grassP = document.getElementById('picGrass');
var harlqP = document.getElementById('picHarlq');
var sevenP = document.getElementById('picSeven');
var sawP = document.getElementById('picSaw');
var crossP = document.getElementById('picCross');
var paintP = document.getElementById('picPaint');
var sweatP = document.getElementById('picSweat');
var tarnP = document.getElementById('picTarn');
var jawP = document.getElementById('picJaw');
var jumpP = document.getElementById('picJump');


amb.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = ambP.src;
    macroCapt.innerText = ambP.alt;
}

macrosModal.onclick = function () {
    macroModal.style.display = 'none';
}