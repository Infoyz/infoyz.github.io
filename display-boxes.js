




function newBox(type,content){

var box = document.createElement("div");
document.body.appendChild(box);
box.className = "display-boxes";

if(type == 'math'){
    
    box.innerHTML = '<div class="vertDiv"><span class="vertSpan" style="font-size:40px;">'+content+'</span></div>';
    
}


updatePositions();

}




function updatePositions(){
    
    var dispboxes = document.getElementsByClassName('display-boxes');
    var amount = dispboxes.length;
    
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var sWidth = searchId.offsetWidth;
    var sHeight = searchId.offsetHeight;
    var hHeight = document.getElementById("page-header").offsetHeight;
    
    var middleX = (wWidth/2)-(sWidth/2);
    var middleY = ((((wHeight-hHeight)/2)-(sHeight/2))+hHeight);

    
    for (var i=0;i<amount;i++){
        
        var currentBox = dispboxes[i];
        var angle = (i+1)/amount*2*Math.PI+(Math.PI/2);
        
        var firstX = wWidth/2+Math.cos(angle)*sWidth/2;
        var firstY = hHeight+(wHeight-hHeight)/2+Math.sin(angle)*sHeight/2;
        
        var secondX = wWidth/2+(Math.cos(angle)*wWidth)/2;
        var secondY = hHeight+(wHeight-hHeight)/2+Math.sin(angle)*(wHeight-hHeight)/2;
        
        currentBox.style.top = -96+(firstY+secondY)/2 + 'px';
        currentBox.style.left = -96+(firstX+secondX)/2 + 'px';
        
    }
    
    if(amount>6){
        while(dispboxes[6]) {
            dispboxes[6].parentNode.removeChild(dispboxes[6]);
        }   
    }
    
}





function deleteAll(){

var dispboxes = document.getElementsByClassName('display-boxes');

while(dispboxes[0]) {
    dispboxes[0].parentNode.removeChild(dispboxes[0]);
}

}
