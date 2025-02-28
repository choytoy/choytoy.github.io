//MODAL IMG

//bio
var blood = document.getElementById('blood');
var windowB = document.getElementById('windowB');
var potassium = document.getElementById('potassium');
var tomb = document.getElementById('tomb');

var bioModal = document.getElementById('bioModal');
var bioImg = document.getElementById('bioImg');
var bioCapt = document.getElementById('bioCapt');

blood.onclick = function () {
    bioModal.style.display = 'block';
    bioImg.src = this.src;
}
windowB.onclick = function () {
    bioModal.style.display = 'block';
    bioImg.src = this.src;
}
potassium.onclick = function () {
    bioModal.style.display = 'block';
    bioImg.src = this.src;
}
tomb.onclick = function () {
    bioModal.style.display = 'block';
    bioImg.src = this.src;
}

bioModal.onclick = function () {
    bioModal.style.display = 'none';
}