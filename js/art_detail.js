// Fetch JSON
fetch("/js/data.json") 
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        var artWorks = document.getElementById("detail").innerHTML = `${data.map(artDetail).join('')}`;
    })
    .catch(function(error) {
        console.log(error);
    });

// Replace underscore on the images if it is need it
function image(underscore) {
    return underscore.replace(/\s/g, '_')
};

// Replace white space on title artwork if it have it for url
function whiteSpaceTitle(title) {
    return title.replace(/\s/g, '%20')
};

// Build the link for sold artwork
function artworkSold(soldText) {
    return `<span class="sold__button">${soldText}</span>`
};

// Build the link for selling artwork
function soldLink(addParameters) {
    return `
        https://alexdolara.typeform.com/to/${addParameters.typeformID}?id=${addParameters.typeformID}&title=${whiteSpaceTitle(addParameters.artworkTitle)}&colors=${addParameters.colors}&artsize=${addParameters.artSize}&framesize=${addParameters.frameSize}&paperquality=${addParameters.paperQuality}"
    `
};

// Check if the artwork is sold or not
function soldTextButtonChange(textChange) {
    if (textChange.buttonText == "SOLD") {
        return `<span class="sold__button">${textChange.buttonText}</span>`
    } else {
        return `<a href="${soldLink(textChange)}" target="_blank" class="buy__button">${textChange.buttonText}</a>`
    }
};

// Build the list of artworks
function artDetail(art) {
    var docTitle = document.title;
    if (docTitle == includes(art.artworkTitle) {
        return `
        <div class="art__item__detail">
            <img src="img/artworks/${image(art.artworkTitle)}.jpg" height="350" alt="${(art.artworkTitle)}" />
            <div class="art_item_description">
                <span class="item__art__title">${art.artworkTitle}</span>
                <span class="item__art__subtitle">Details / Detalles:</span>
                <div class="art__item__deep_description">
                    <ul>
                        <li>Colors / Colores: <i>${art.colors}</i></li>
                        <li>Art size / Tamaño obra: <i>${art.artSize}</i> cms</li>
                        <li>Frame size / Tamaño cuadro: <i>${art.frameSize}</i> cms</li>
                        <li>Paper / Papel: <i>${art.paperQuality}</i> g/m²</li>
                    </ul>
                </div>
                <div class="art__item__button">
                    ${soldTextButtonChange(art)}
                </div>
            </div>
        </div>
        `
    } else {
        return "Nothing to show."
    }
};