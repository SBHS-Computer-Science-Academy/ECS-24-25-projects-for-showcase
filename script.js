var names = [
  "Emily",
  "Alex",
  "Mason",
  "Jacob",
  "Samantha",
  "Michelle",
  "Carlos",
  "Alice",
  "Nicholas",
  "Rudy and Hollister",
  "Cadence",
  "Isabella",
  "Kaylee",
  "Joan",
  "George",
  "Juan",
  "Kayleb",
  "Bryan",
  "Jazmin",
  "Alessandro",
  "Tino",
  "Eduardo",
  "Cesar",
  "Adam",
  "Daniel"
];

var urls = [
  "https://codehs.com/sandbox/id/p5js-duck-animation-EkAMhe",
  "https://codehs.com/sandbox/magentagoat1486/raining-sky",
  "https://codehs.com/sandbox/id/car-animation-sS5Cy9",
  "https://codehs.com/sandbox/id/keyboard-interaction-bbPUF5",
  "https://codehs.com/sandbox/id/chatbot1-hsPsNY",
  "https://codehs.com/sandbox/michellerstheprogamer/keyboard-interaction",
  "https://codehs.com/sandbox/id/shark-animation-nHn2M4",
  "https://codehs.com/sandbox/id/keyboard-interaction-3VnHmX",
  "https://focpgiazry-2828037431-a.codehs.me/index.html",
  "https://group-project-13246376.codehs.me/index.html",
  "https://codehs.com/sandbox/id/cadence-border-project-UiCuAD",
  "https://codehs.com/sandbox/id/isabella-community-artwork-m94mX2",
  "https://codehs.com/sandbox/id/kaylee-community-artwork-A6VKXk",
  "https://codehs.com/sandbox/id/new-sandbox-program-ZndTVD",
  "https://codehs.com/sandbox/id/simple-animation-01Pgx8",
  "https://codehs.com/share/id/simple-animation-phKUK6/run",
  "https://codehs.com/sandbox/id/animation-project-Qt76Hb",
  "https://codehs.com/share/sandbox-program-oMIun5?collaborate=-OPqxzkzqyV-Dn3X_C8j",
  "https://codehs.com/sandbox/id/new-sandbox-program-nxLKxj",
  "https://new-sandbox-program-1-13231449.codehs.me/index.html",
  "https://codehs.com/sandbox/id/tino-community-artwork-eIWUF0",
  "https://codehs.com/sandbox/id/eduardo-community-artwork-vSp0PC",
  "https://esaeyaznev-2833099158-a.codehs.me/index.html",
  "https://yhvmbxspda-2888472698-a.codehs.me/index.html",
  "https://codehs.com/sandbox/id/daniel-writing-functions-SOgwqc"
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
