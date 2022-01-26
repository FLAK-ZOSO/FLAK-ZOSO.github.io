// Function to copy the content of a <textarea> to the cache
function copyToCache(element) {
    var copyText = document.getElementById(element);

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);

    console.log("Copied the text: " + copyText.value)

    return copyText.value;
}