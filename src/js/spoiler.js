Array.from(document.getElementsByClassName('spoiler')).forEach(element => {
    element.addEventListener('click', function() {
        element.classList = ['after-spoiler'];
    })
})