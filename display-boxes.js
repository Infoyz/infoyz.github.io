var boxes = [];




function newBox(){

var randomnum = Math.random()*20;
var divId = "id"+randomnum;

document.createElement(divId);
boxes.push(divId);

}



function boxHTML(id,htmlCode){

document.getElementById(id).innerHTML = htmlCode;

}


function deleteAll(){

boxes = [];

}
