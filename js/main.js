// Fetch JSON
fetch("/js/data.json") 
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        var artWorks = document.getElementById("list").innerHTML = `${data.map(artTemplate).join('')}`;
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
    return ` `
};
// https://alexdolara.typeform.com/to/${addParameters.typeformID}?id=${addParameters.typeformID}&title=${whiteSpaceTitle(addParameters.artworkTitle)}&colors=${addParameters.colors}&artsize=${addParameters.artSize}&framesize=${addParameters.frameSize}&paperquality=${addParameters.paperQuality}"
// Check if the artwork is sold or not
function soldTextButtonChange(textChange) {
    if (textChange.buttonText == "SOLD") {
        return `<span class="sold__button">${textChange.buttonText}</span>`
    } else {
        return `<a href="${soldLink(textChange)}" target="_blank" class="buy__button">${textChange.buttonText}</a>`
    }
};

// Include dash in title link
function dashLink(title) {
    return title.replace(/\s/g, '-')
};

// Art item detail link
function artDetailLink(link) {
    return `
        http://alexdolara.com/art-details/${dashLink(link)}.html
    `
};

// Build the list of artworks
function artTemplate(art) {
    return `
    <!-- NEW ARTWORK -->
    <div class="art__item">
        <div>
            <img src="img/artworks/${image(art.artworkTitle)}.jpg" height="350" alt="${art.artworkTitle}" />
        </div>
        <div class="art__description">
            <div class="left">
                <span><strong>${art.artworkTitle}</strong></span>
                <a href="${artDetailLink(art.artworkTitle)}" class="art__details__link">Artwork details</a>
            </div>
            <div class="right">
                ${soldTextButtonChange(art)}
            </div>
        </div>
    </div>
    `
};