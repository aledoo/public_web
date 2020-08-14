const artWork = [
    {
        artworkTitle: "Falling in love",
        typeformID: "bi6F9pEy",
        buttonText: "BUY 100€",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Elephant",
        typeformID: "BwS7hGo4",
        buttonText: "BUY 100€",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Bailaor",
        typeformID: "MWMpcKBS",
        buttonText: "BUY 100€",
        colors: "26",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Something going on",
        typeformID: "QHkceWuA",
        buttonText: "BUY 100€",
        colors: "23",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Still life",
        typeformID: "kSncHn",
        buttonText: "BUY 100€",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Jacqueline y las flores",
        typeformID: "tljae1",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Woman on a sofa",
        typeformID: "ynCgtQ",
        buttonText: "BUY 100€",
        colors: "32",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Portrait",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Rider",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Bottle",
        typeformID: "T97Las",
        buttonText: "BUY 100€",
        colors: "26",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Cheeses",
        typeformID: "fMgs1H",
        buttonText: "BUY 100€",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Applauses",
        typeformID: "FYxAvg",
        buttonText: "BUY 100€",
        colors: "17",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Travelling",
        typeformID: "x6819A",
        buttonText: "BUY 100€",
        colors: "24",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Shirts",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Michael Jordan",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "The Pianist",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    },
    {
        artworkTitle: "Tango",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "",
        artSize: "",
        frameSize: "",
        paperQuality: ""
    },
    {
        artworkTitle: "Cats",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "",
        artSize: "",
        frameSize: "3",
        paperQuality: ""
    },
    {
        artworkTitle: "Women",
        typeformID: "LTflaQ",
        buttonText: "SOLD",
        colors: "25",
        artSize: "21x29,7",
        frameSize: "30x40",
        paperQuality: "90"
    }
    
  ];

// Replace underscore on the images if it is need it
function image(underscore) {
    return underscore.replace(/\s/g, '_')
};

// Replace white space on title artwork if it have it for url
function whiteSpaceTitle(title) {
    return title.replace(/\s/g, '%20')
};

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
            </div>
            <div class="right">
                <a href="https://alexdolara.typeform.com/to/${art.typeformID}?id=${art.typeformID}&title=${whiteSpaceTitle(art.artworkTitle)}&colors=${art.colors}&artsize=${art.artSize}&framesize=${art.frameSize}&paperquality=${art.paperQuality}" target="_blank" class="buy__button">${art.buttonText}</a>
            </div>
        </div>
    </div>
    `
};

document.getElementById("app").innerHTML = `
    ${artWork.map(artTemplate).join('')}
`