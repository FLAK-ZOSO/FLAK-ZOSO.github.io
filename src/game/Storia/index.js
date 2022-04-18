const delay = 5;


function removePopups() {
    let popups = Array.from(document.getElementsByClassName('intro'));
    popups = popups.filter((value) => {
        return value.id.includes('_popup') && value.style.display=='table';
    });
    popups.forEach((element) => {
        element.style.display = 'none';
    });
}
document.getElementsByTagName('body')[0].addEventListener('click', removePopups);


var images = Array.from(document.getElementsByClassName('icon'));
images.forEach(function(element) {
    element.addEventListener('click', function() {
        setTimeout(() => {
            let id = element.id;
            try {
                document.removeEventListener('scroll', removePopups);
                // document.getElementById(`${id.replace(id[id.length-1], '')}_div`).scrollIntoView();
                setTimeout(() => {
                    document.addEventListener('scroll', removePopups);
                }, delay);
            } catch (error) {
                if (!error instanceof TypeError) {
                    console.error(error);
                } else {
                    document.removeEventListener('scroll', removePopups);
                    // document.getElementById(`${id}_div`).scrollIntoView();
                    setTimeout(() => {
                        document.addEventListener('scroll', removePopups);
                    }, delay);
                }
            }
            document.getElementById(`${id}_popup`).style.display = "table";
            function hidePopUp() {
                document.getElementById(`${id}_popup`).style.display = "none";
                document.getElementById(`${id}_popup`).removeEventListener('click', hidePopUp);
            }
            document.getElementById(`${id}_popup`).addEventListener('click', hidePopUp);
        }, delay);
    });
});

var intros = Array.from(document.getElementsByClassName('intro'));
intros = intros.filter((value) => {
    return value.id.includes('_div') && value.style.width=='95%';
});
intros.forEach(function(element) {
    element.addEventListener('click', function() {
        setTimeout(() => {
            try {
                document.removeEventListener('scroll', removePopups);
                // element.scrollIntoView();
                setTimeout(() => {
                    document.addEventListener('scroll', removePopups);
                }, delay);
            } catch (error) {
                if (!error instanceof TypeError) {
                    console.error(error);
                } else {
                    try {
                        let i = element.id[-5];
                        // document.getElementById(`${element.id}${i}_popup`).scrollIntoView();
                    } catch (error_) {
                        if (!error_ instanceof TypeError)
                            console.error(error_);
                    }
                }
            }
            document.getElementById(`${element.id}_popup`).style.display = "table";
            document.getElementById(`${element.id}_popup`).addEventListener('click', function() {
                document.getElementById(`${element.id}_popup`).style.display = "none";
            });
            document.getElementById(`${element.id}_popup`).removeEventListener('click', function() {
                document.getElementById(`${element.id}_popup`).style.display = "none";
            });
        }, delay);
    })
})