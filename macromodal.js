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
    macroCapt.innerText = amb.alt;
}
bee.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = beeP.src;
    macroCapt.innerText = bee.alt;
}
cuke.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = cukeP.src;
    macroCapt.innerText = cuke.alt;
}
drgn.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = drgnP.src;
    macroCapt.innerText = drgn.alt;
}
fly.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = flyP.src;
    macroCapt.innerText = fly.alt;
}
grass.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = grassP.src;
    macroCapt.innerText = grass.alt;
}
harlq.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = harlqP.src;
    macroCapt.innerText = harlq.alt;
}
seven.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = sevenP.src;
    macroCapt.innerText = seven.alt;
}
saw.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = sawP.src;
    macroCapt.innerText = saw.alt;
}
cross.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = crossP.src;
    macroCapt.innerText = cross.alt;
}
paint.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = paintP.src;
    macroCapt.innerText = paint.alt;
}
sweat.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = sweatP.src;
    macroCapt.innerText = sweat.alt;
}
tarn.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = tarnP.src;
    macroCapt.innerText = tarn.alt;
}
jaw.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = jawP.src;
    macroCapt.innerText = jaw.alt;
}
jump.onclick = function () {
    macroModal.style.display = 'block';
    macroImg.src = jumpP.src;
    macroCapt.innerText = jump.alt;
}

macroModal.onclick = function () {
    macroModal.style.display = 'none';
}