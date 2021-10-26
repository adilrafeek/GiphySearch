/* 1. Grab the input value */


const form = document.querySelector('form');
const input = document.querySelector('input');
const searchResult = document('#result');
  
  
  /* 2. do the data stuff with the API */
  
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const search = input.value;
  fetch("https://giphy.p.rapidapi.com/v1/gifs/search?q="+encodeURIComponent(search)+"&api_key=dc6zaTOxFJmzC", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "d84d3570cbmsh4cf2e7f5a3d5ce8p1e433ejsnde64c49690bc"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
});
  
  
  
  
  
  /* 3. Show me the GIFs */
  
  function pushToDOM(input) {
  
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
  
  }