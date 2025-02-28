// TOGGLE HOVER ON INDEX

// DECLARE DIVS
const navMapAbout = document.querySelector('#navMapAbout');
const navMapFiber = document.querySelector('#navMapFiber');
const navMapPhoto = document.querySelector('#navMapPhoto');
const navMapIllus = document.querySelector('#navMapIllus');
const navMapinteraction = document.querySelector('#navMapinteraction');

// DECLARE IMG

const hoverAbout = document.querySelector('#hoverAbout');
const hoverFiber = document.querySelector('#hoverFiber');
const hoverPhoto = document.querySelector('#hoverPhoto');
const hoverpIllus = document.querySelector('#hoverIllus');
const hoverinteraction = document.querySelector('#hoverinteraction');

// ADD EVENT LISTENERS

// ABOUT
navMapAbout.addEventListener('mouseover', () => {
    hoverAbout.classList.remove('homeHidden');
    hoverAbout.classList.add('homeHover');
})

navMapAbout.addEventListener('mouseout', () => {
    hoverAbout.classList.remove('homeHover');
    hoverAbout.classList.add('homeHidden');
})

// FIBER

navMapFiber.addEventListener('mouseover', () => {
    hoverFiber.classList.remove('homeHidden');
    hoverFiber.classList.add('homeHover');
})

navMapFiber.addEventListener('mouseout', () => {
    hoverFiber.classList.remove('homeHover');
    hoverFiber.classList.add('homeHidden');
})

// ILLUS

navMapIllus.addEventListener('mouseover', () => {
    hoverIllus.classList.remove('homeHidden');
    hoverIllus.classList.add('homeHover');
})

navMapIllus.addEventListener('mouseout', () => {
    hoverIllus.classList.remove('homeHover');
    hoverIllus.classList.add('homeHidden');
})

// PHOTO

navMapPhoto.addEventListener('mouseover', () => {
    hoverPhoto.classList.remove('homeHidden');
    hoverPhoto.classList.add('homeHover');
})

navMapPhoto.addEventListener('mouseout', () => {
    hoverPhoto.classList.remove('homeHover');
    hoverPhoto.classList.add('homeHidden');
})

// interaction

navMapinteraction.addEventListener('mouseover', () => {
    hoverinteraction.classList.remove('homeHidden');
    hoverinteraction.classList.add('homeHover');
})

navMapinteraction.addEventListener('mouseout', () => {
    hoverinteraction.classList.remove('homeHover');
    hoverinteraction.classList.add('homeHidden');
})
