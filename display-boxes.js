




function newBox(content){

var box = document.createElement("div");
document.body.appendChild(box);
box.className = "display-boxes";
box.innerHTML = content;

}



function deleteAll(){

var dispboxes = document.getElementsByClassName('display-boxes');

while(dispboxes[0]) {
    dispboxes[0].parentNode.removeChild(dispboxes[0]);
}​

}
