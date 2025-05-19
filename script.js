var names = [
  "Mason",
  "Jacob",
  "Samantha",
  "Michelle",
  "Carlos",
  "Alice",
  "Nicholas",
  "Hollister",
  "Rudy and Hollister",
  "Cadence",
  "Isabella"
];

var urls = [
  "https://codehs.com/sandbox/id/car-animation-sS5Cy9",
  "https://codehs.com/sandbox/id/keyboard-interaction-bbPUF5",
  "https://codehs.com/sandbox/id/chatbot1-hsPsNY",
  "https://codehs.com/sandbox/michellerstheprogamer/keyboard-interaction",
  "https://codehs.com/sandbox/id/shark-animation-nHn2M4",
  "https://codehs.com/sandbox/id/keyboard-interaction-3VnHmX",
  "https://codehs.com/sandbox/id/function-ZfmyEh",
  "https://codehs.com/sandbox/id/rocket-animation-oassVQ",
  "https://group-project-13246376.codehs.me/index.html",
  "https://codehs.com/sandbox/id/cadence-border-project-UiCuAD",
  "https://codehs.com/sandbox/id/isabella-community-artwork-m94mX2"
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '" target="_blank" rel="noopener noreferrer"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var file = name.replaceAll(" ","").replaceAll(",","").replace("and","");
    var card = generateCard(name, file + ".png", "", urls[idx]);
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
