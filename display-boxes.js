var boxes = [];




function newBox(){

var divId = Math.random();

document.createElement(divId);
boxes.push(divId);

}



function boxHTML(id,htmlCode){

document.getElementById(id).innerHTML = htmlCode;

}


function deleteAll(){

boxes = [];

}
