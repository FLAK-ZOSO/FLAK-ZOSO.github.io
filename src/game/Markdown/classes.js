function spoiler() {
    Array.from(document.getElementsByClassName('spoiler')).forEach(element => {
        element.addEventListener('click', function() {
            element.classList = ['after-spoiler'];
        })
    })
}


document.getElementById('convert').addEventListener('click', function() {
    setTimeout(spoiler, 10);
});