// Import statements (still not working)
// import { openBar } from "./sidebar.js";

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
        width_ = 55;
    } else {
        width_ = 17;
    }
    openBar('sidebar', width_, 'intro');
    console.log(`The sidebar width was set to ${width_}%`);
}