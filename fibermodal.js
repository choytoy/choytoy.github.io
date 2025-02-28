//MODAL IMG

//ILLUS
var brooch = document.getElementById('brooch');
var catBag = document.getElementById('catBag');
var berry = document.getElementById('berry');
var hand = document.getElementById('hand');

var fiberModal = document.getElementById('fiberModal');
var fiberImg = document.getElementById('fiberImg');
var fiberCapt = document.getElementById('fiberCapt');

berry.onclick = function () {
    fiberModal.style.display = 'block';
    fiberImg.src = this.src;
    fiberCapt.innerText = this.alt;
}

catBag.onclick = function () {
    fiberModal.style.display = 'block';
    fiberImg.src = this.src;
    fiberImg.style.height = '500px';
    fiberImg.style.width = 'auto';
    fiberCapt.innerText = this.alt;
}

brooch.onclick = function () {
    fiberModal.style.display = 'block';
    fiberImg.src = this.src;
    fiberCapt.innerText = this.alt;
}

hand.onclick = function () {
    fiberModal.style.display = 'block';
    fiberImg.style.height = '500px';
    fiberImg.style.width = 'auto';
    fiberImg.src = this.src;
    fiberCapt.innerText = this.alt;
}


fiberModal.onclick = function () {
    fiberModal.style.display = 'none';
}