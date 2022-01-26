/* This module contains functions from both setWidth.js and sidebar.js */

// Set the width of the sidebar to x% and the left margin of the page content to x%
function openBar(bar, width, ...elements) {
    document.getElementById(bar).style.width = `${width}%`;
    shrinkElements(elements, width);
}

// Set the width of the sidebar to 0 and the left margin of the page content to 0
function closeBar(bar, ...elements) {
    document.getElementById(bar).style.width = "0";
    widenElements(elements);
}

// Set the widht of the elements to 0
function widenElements(elements) {
    elements.forEach(element=>{
        document.getElementById(element).style.marginLeft = "0";
    }
    );
}

// Set the widht of the elements to x%
function shrinkElements(elements, width) {
    var width = parseInt(width);
    elements.forEach(element=>{
        document.getElementById(element).style.marginLeft = `${width + 0.5}%`;
    }
    );
}

// Function to understand if the device screen is bigger than X pixels, copied from mediaQuery.js
function isBigEnough(x) {
    const mediaQuery = window.matchMedia(`(min-width: ${x}px)`);
    if (mediaQuery.matches) {
        console.log(`The screen is ${window.screen.width}px large`);
        return true;
    }
    return false;
}
const cellphone = !isBigEnough(600);

// Set the width from the value of the screen
function setWidth() {
    var width_;
    if (cellphone) {
        window.location = 'mobile.html';
    } else {
        width_ = 17;
    }
    openBar('sidebar', width_, 'madeWith', 'intro', 'skills', 'github', 'code', 'games', 'dataTreatment');
    console.log(`The sidebar width was set to ${width_}%`);
}

function setWidth2() {
    var width_;
    if (cellphone) {
        window.location = 'mobile.html';
    } else {
        width_ = 17;
    }
    openBar('sidebar', width_, 'intro', 'strumentDiv', 'madeWith');
    console.log(`The sidebar width was set to ${width_}%`);
}

function onStartTris() {
    document.getElementById('copy').addEventListener('click', function() {
        navigator.clipboard.writeText('pip install -i https://test.pypi.org/simple/ TrisPlayer');
    })
}