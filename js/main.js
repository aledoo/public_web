// Fetch JSON
fetch("/js/data.json") 
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        // document.getElementById("list").innerHTML = `
        //     ${data.map(artTemplate).join('')}
        // ` 
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
function soldLink(linkParams) {
    return `
        https://alexdolara.typeform.com/to/${linkParams.typeformID}?id=${linkParams.typeformID}&title=${whiteSpaceTitle(linkParams.artworkTitle)}&colors=${linkParams.colors}&artsize=${linkParams.artSize}&framesize=${linkParams.frameSize}&paperquality=${linkParams.paperQuality}"
    `
};

// Check if the artwork is sold or not
function artSoldOrNot(artworkStatus) {
    if (artworkStatus.buttonText == "SOLD") {
        return `<span class="sold__button">${artworkStatus}</span>`
    } else {
        return `<a href="${soldLink(artworkStatus.typeformID, artworkStatus.artworkTitle, artworkStatus.colors, artworkStatus.artSize, artworkStatus.frameSize, artworkStatus.paperQuality)}" target="_blank" class="buy__button">${artworkStatus.buttonText}</a>`
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

