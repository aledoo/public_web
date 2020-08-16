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
function soldLink(typeformID, artworkTitle, colors, artSize, frameSize, paperQuality) {
    return `
        https://alexdolara.typeform.com/to/${typeformID}?id=${typeformID}&title=${whiteSpaceTitle(artworkTitle)}&colors=${colors}&artsize=${artSize}&framesize=${frameSize}&paperquality=${paperQuality}"
    `
};

// Check if the artwork is sold or not
function artSoldOrNot(buttonText, typeformID, artworkTitle, colors, frameSize, paperQuality) {
    if (buttonText == "SOLD") {
        return `<span class="sold__button">${buttonText}</span>`
    } else {
        return `<a href="${soldLink(typeformID, artworkTitle, colors, artSize, frameSize, paperQuality)}" target="_blank" class="buy__button">${buttonText}</a>`
    }
};

// Build the list of artworks
function artTemplate(artWorks) {
    return `
    <!-- NEW ARTWORK -->
    <div class="art__item">
        <div>
            <img src="img/artworks/${image(artWorks.artworkTitle)}.jpg" height="350" alt="${artWorks.artworkTitle}" />
        </div>
        <div class="art__description">
            <div class="left">
                <span><strong>${artWorks.artworkTitle}</strong></span>
            </div>
            <div class="right">
                ${artSoldOrNot(artWorks.buttonText, artWorks.typeformID, artWorks.artworkTitle, artWorks.colors, artWorks.artSize, artWorks.frameSize, artWorks.paperQuality)}
            </div>
        </div>
    </div>
    `
};

// Build the artwork list
// document.getElementById("list").innerHTML = `
//     ${artWork.map(artTemplate).join('')}
// `

