window.addEventListener("resize", repositionSearch);
var searchClass = document.getElementsByClass("middle-page-search-bar");
searchClass[0].addEventListener("resize", repositionSearch);

function repositionSearch(){


var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
var sWidth = searchClass[0].offsetWidth;
var sHeight = searchClass[0].offsetHeight;
console.log("window width"+wWidth+"window height"+wHeight+"search width"+sWidth+"search height"+sHeight);

}
