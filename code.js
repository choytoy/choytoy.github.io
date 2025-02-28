
var wcHome = document.getElementById('wcHome');
var refresh = document.getElementById('refresh');
var eSeraph = document.getElementById('eSeraph');
var portF = document.getElementById('portF');
var grow = document.getElementById('grow');
var redRiv = document.getElementById('redRiv');
var projectPanel = document.getElementById('projectPanel');

wcHome.onclick = function () {
    projectPanel.children[0].innerHTML = 'A narrative-heavy point-and-click game based off real experiences. Maya returns from school abroad to find new tensions have shaped her friend group in her absence. Navigate the awkwardness of a NYE house party in your late 20s. <br/><br/>Built in Adventure Game Studio (originally released in 1997), this game is a callback to point-and-click adventure games of the 90s.<br/><br/>Code, art, and music by Choy.<br/><br/>Projected release date: Summer 2025.'
}

refresh.onclick = function () {
    projectPanel.children[0].innerHTML = 'A one-month contract with Refresh Wellness, a Canadian-owned occupational wellness startup, to "gamify" their support platform. <br/><br/>Working closely with their in-house programming team, I am designing and implementing a UX flow to maximize user engagement and wellness outcomes.<br/><br/>Project timeline: March through April 2025.'
}

eSeraph.onclick = function () {
    projectPanel.children[0].innerHTML = 'An oracle card web app built in HTML, CSS, and vanilla JS. Animated using CSS keyframes.<br/><br/>Featuring hand-drawn archival horror-style card art.<br/><br/>Illustration, copy, code, and design by Choy.<br/><br/><a href="https://choytoy.github.io/e-seraph/" target="blank">Link</a>'
}

portF.onclick = function () {
    projectPanel.children[0].innerHTML = "The very website you're browsing!<br/><br/>Hosted by Github Pages, this homepage is comprised of prose, original art, and original code.<br/><br/>Thank you for being here. ♡"
}

grow.onclick = function () {
    projectPanel.children[0].innerHTML = "A short Bitsy game built in a day for the first edition of <i>International Long COVID Awareness Day (March 15, 2023).</i><br/><br/>In this project, Choy reflects on 3 years of living with immunosuppression in a world with shifting opinions regarding transmission precautions, and the ties of community that join disabled and high-risk people over the Internet.<br/><br/>Republished February 2025.<br/><br/><a href='' target='blank'>Link</a>"
}

redRiv.onclick = function () {
    projectPanel.children[0].innerHTML = "A short Bitsy game built in a weekend for <i>Bitsy Jam #77 (October 15th, 2023).</i><br/><br/>Addressing nostalgia, sibling relationships, and depression.<br/><br/>Republished February 2025.<br/><br/><a href='' target='blank'>Link</a>"
}