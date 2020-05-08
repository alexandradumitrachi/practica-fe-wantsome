const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
let request = new XMLHttpRequest();
request.open("GET", URL);
request.responseType = "json";
request.send();

const theQuote = (quote) => {
  const paragraph = document.getElementById("quote");
  paragraph.textContent = quote;
};

const loading = () => {
  let quote = request.response;
  theQuote(quote);
  request.open("GET", URL);
  request.responseType = "json";
  request.send();
};

const button = document.getElementById("xhr");
button.addEventListener("click", loading);


// ex2


const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'
let requestP = new XMLHttpRequest();
requestP.open('GET', puppies);
requestP.responseType = 'json';
requestP.send();

const getImg = (image) =>{
    const txt = document.querySelector('.text');
    txt.textContent = "";
    image.data.children.forEach(element => {
        let img = document.createElement('img');
        img.setAttribute('src', element.data.thumbnail);
        txt.appendChild(img);
    })
}
const loadP = () =>{
    let image = requestP.response;
    getImg(image);
    requestP.open('GET', puppies);
    requestP.responseType = 'json';
    requestP.send();
}

const buttonP = document.querySelector ('.btn');
buttonP.addEventListener('click', loadP);

