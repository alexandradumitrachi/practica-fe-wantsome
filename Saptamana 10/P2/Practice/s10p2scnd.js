let URL =
  "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json";
let request = new XMLHttpRequest();
request.open("GET", URL);
request.responseType = "json";
request.send();

const listOfColors = (colors) => {
  let info = Object.keys(colors);
  let color = Object.values(colors);
  let theList = document.createElement("ul");
  theList.style.listStyle = 'none'
  for (i = 0; i < info.length; i++) {
    let theContent = document.createElement("li");
    theList.appendChild(theContent);

    let theSquare = document.createElement("div");
    theSquare.style.width = "10px";
    theSquare.style.height = "10px";
    theSquare.style.display = "inline-block";
    theSquare.style.marginRight = '10px'
    theSquare.style.backgroundColor = color[i];
    theContent.appendChild(theSquare);

    let theInfo = document.createElement("div");
    theInfo.style.display = "inline-block";
    theInfo.textContent = info[i];
    theContent.appendChild(theInfo);
  }
  let theBody = document.querySelector("body");
  theBody.appendChild(theList);
};

request.onload = () => {
  const colors = request.response;
  listOfColors(colors);
};
