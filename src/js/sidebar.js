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
    elements.forEach(element => {
        document.getElementById(element).style.marginLeft = "0";
    });
}

// Set the widht of the elements to x%
function shrinkElements(elements, width) {
    var width = parseInt(width);
    elements.forEach(element => {
        document.getElementById(element).style.marginLeft = `${width+1}%`;
    });
}

// Export statements (still not working)
// export { openBar, closeBar, widenElements, shrinkElements }