// Function to open a link in a new tab
function openLink(link) {
    window.open(link, '_blank');
    console.log(`${link} was opened in a new tab.`);
    console.count(`openLink`);
}