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
console.log("window width"+wWidth+"window height"+wHeight+"search width"+sWidth+"search height"+sHeight);

}
