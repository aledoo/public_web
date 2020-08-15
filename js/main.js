// const artWork = [
//     {
//         artworkTitle: "falling in love",
//         typeformID: "bi6F9pEy",
//         buttonText: "BUY 100€",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "elephant",
//         typeformID: "BwS7hGo4",
//         buttonText: "BUY 100€",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "bailaor",
//         typeformID: "MWMpcKBS",
//         buttonText: "BUY 100€",
//         colors: "26",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "something going on",
//         typeformID: "QHkceWuA",
//         buttonText: "BUY 100€",
//         colors: "23",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "still life",
//         typeformID: "kSncHn",
//         buttonText: "BUY 100€",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "jacqueline y las flores",
//         typeformID: "tljae1",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "woman on a sofa",
//         typeformID: "ynCgtQ",
//         buttonText: "BUY 100€",
//         colors: "32",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "portrait",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "rider",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "bottle",
//         typeformID: "T97Las",
//         buttonText: "BUY 100€",
//         colors: "26",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "cheeses",
//         typeformID: "fMgs1H",
//         buttonText: "BUY 100€",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "applauses",
//         typeformID: "FYxAvg",
//         buttonText: "BUY 100€",
//         colors: "17",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "travelling",
//         typeformID: "x6819A",
//         buttonText: "BUY 100€",
//         colors: "24",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "shirts",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "jordan",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "the pianist",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     },
//     {
//         artworkTitle: "tango",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "",
//         artSize: "",
//         frameSize: "",
//         paperQuality: ""
//     },
//     {
//         artworkTitle: "cats",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "",
//         artSize: "",
//         frameSize: "3",
//         paperQuality: ""
//     },
//     {
//         artworkTitle: "women",
//         typeformID: "LTflaQ",
//         buttonText: "SOLD",
//         colors: "25",
//         artSize: "21x29,7",
//         frameSize: "30x40",
//         paperQuality: "90"
//     }
    
//   ];

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
function soldLink(json) {
    return `
        https://alexdolara.typeform.com/to/${json.typeformID}?id=${json.typeformID}&title=${whiteSpaceTitle(json.artworkTitle)}&colors=${json.colors}&artsize=${json.artSize}&framesize=${json.frameSize}&paperquality=${json.paperQuality}"
    `
};

// Check if the artwork is sold or not
function artSoldOrNot(artworkStatus) {
    if (artworkStatus == "SOLD") {
        return `<span class="sold__button">${artworkStatus}</span>`
    } else {
        return `<a href="${soldLink()}" target="_blank" class="buy__button">${artworkStatus}</a>`
    }
};

// Build the list of artworks
function artTemplate(json) {
    return `
    <!-- NEW ARTWORK -->
    <div class="art__item">
        <div>
            <img src="img/artworks/${image(json.artworkTitle)}.jpg" height="350" alt="${json.artworkTitle}" />
        </div>
        <div class="art__description">
            <div class="left">
                <span><strong>${json.artworkTitle}</strong></span>
            </div>
            <div class="right">
                ${json.buttonText}
            </div>
        </div>
    </div>
    `
};

// Build the artwork list
// document.getElementById("list").innerHTML = `
//     ${artWork.map(artTemplate).join('')}
// `

// Fetch JSON
fetch("/js/data.json") 
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        // document.getElementById("list").innerHTML = `
        //     ${data.map(artTemplate).join('')}
        // ` 
        var json = document.getElementById("list").innerHTML = `${data.map(artTemplate).join('')}`;
    })
    .catch(function(error) {
        console.log(error);
    });