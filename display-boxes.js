var boxes = [];




function newBox(){

var randomnum = Math.random();
var divId = "id"+randomnum.slice(2,16);

document.createElement(divId);
boxes.push(divId);

}



function boxHTML(id,htmlCode){

document.getElementById(id).innerHTML = htmlCode;

}


function deleteAll(){

boxes = [];

}
