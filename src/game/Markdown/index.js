// Variables
start = `<!DOCTYPE html>\n<html>\n\t<head>`;
css = `\n\t\t<link rel="stylesheet" href="classes.css">`;
body = `\n\t</head>\n\t<body style="background-color: black">\n\t\t<p>\n\t\t\t`;
js = `\n\t\t<script type="text/javascript" src="classes.js"></script>`;
end = `\n\t\t</p>${js}\n\t</body>\n</html>`;

const characters = [
    '***',
    '**',
    '$',
    '*',
    '||',
    '_',
    ']['
];

const opening = [
    '<code class="big">',
    '<code class="bold">',
    '<code class="code">',
    '<code class="italic">',
    '<button class="spoiler">',
    '<code class="underlined">',
    '<button class="keyboard">'
];

const closing = [
    '</code>',
    '</code>',
    '</code>',
    '</code>',
    '</button>',
    '</code>',
    '</button>'
];

const opener = _zip(characters, opening);
const closer = _zip(characters, closing);

// Private functions
function _zip(keys, values) {
    var result = {};
    keys.forEach((key, i) => result[key] = values[i]);
    return result;
}
function _count(string_, chars) {
    // https://stackoverflow.com/a/4009771/15888601
    return toString(string_).split(chars).length - 1;
}


function _replace(text) {
    characters.forEach((value) => {
        console.log(value);
        console.log(toString(text).indexOf(value));
        while (toString(text).indexOf(value) > -1) {
            text = toString(text).replace(value, opener[value]);
            console.log(toString(text).replace(value, opener[value]));
            text = toString(text).replace(value, closer[value]);
            console.log(toString(text).replace(value, closer[value]));
        }
        console.log(text);
    });
    text = text.replaceAll('\n', '<br><br>\n\t\t\t');
    console.log(text);
    return text;
}


function convert() {
    let words = document.getElementById('text').value;
    console.log(words);
    console.log(_replace(words));
    let words_ = _replace(words);
    console.log(words_);
    document.getElementById('output').innerHTML = words_;
}


document.getElementById('convert').addEventListener('click', convert);