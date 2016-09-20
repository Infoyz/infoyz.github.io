var boxes = [];




function newBox(){

var divId = "id"+Math.random().slice(2,16);

document.createElement(divId);
boxes.push(divId);

}



function boxHTML(id,htmlCode){

document.getElementById(id).innerHTML = htmlCode;

}


function deleteAll(){

boxes = [];

}
