// Function to generate the link to an email
function getLink(body, output) {
    var link = `mailto:mattia.marchese.2006@gmail.com?cc=marchese.mattia@liceolioy.edu.it&subject=${encodeURIComponent("Email from FLAK-ZOSO website")}&body=${encodeURIComponent(document.getElementById(body).value)}`;
    document.getElementById(output).value = link;
    return link;
}