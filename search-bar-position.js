var listenerAdded = false;
var searchId;
window.addEventListener("load", init, false);

function init(){
  
window.addEventListener("resize", repositionSearch);
searchId = document.getElementById("middle-page-search-bar");
searchId.addEventListener("transitionend", repositionSearch);

if(!listenerAdded){
  
  listenerAdded = true;
  
  repositionSearch();
  
}

}


function repositionSearch(){

var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
var sWidth = searchId.offsetWidth;
var sHeight = searchId.offsetHeight;
var hHeight = document.getElementById("page-header").offsetHeight;

searchId.style.left = (wWidth/2)-(sWidth/2);
searchId.style.top = ((((wHeight-hHeight)/2)-(sHeight/2))+hHeight);

}
