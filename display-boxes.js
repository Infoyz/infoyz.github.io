




function newBox(type,content){

    var box = document.createElement("div");
    document.body.appendChild(box);
    box.className = "display-boxes";

    if(type == 'math'){

        box.innerHTML = '<div class="vertDiv"><span class="vertSpan" style="font-size:40px;">'+content+'</span></div>';

        if(box.children[0].children[0].offsetWidth>172){
            var wideSpan = box.children[0].children[0];
            while(wideSpan.offsetWidth>172){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        
        
        
    }
    if(type == 'define'){
        
        box.innerHTML = '<span class="vertSpan" style="font-size:40px;width:86px">'+content[0]+'</span><span class="vertSpan" style="font-size:30px;width:86px">'+content[1]+'</span><br /><span class="vertSpan" style="font-size:25px;height:86px">'+content[2]+'</span>';
        
        console.log(box.children);
        
        if(box.children[0].offsetWidth>86){
            var wideSpan = box.children[0];
            while(wideSpan.offsetWidth>86){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        if(box.children[0].offsetHeight>86){
            var wideSpan = box.children[0];
            while(wideSpan.offsetHeight>86){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        
        
        
        if(box.children[1].offsetWidth>86){
            var wideSpan = box.children[1];
            while(wideSpan.offsetWidth>86){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        if(box.children[1].offsetHeight>86){
            var wideSpan = box.children[1];
            while(wideSpan.offsetHeight>86){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        
        
        
        if(box.children[3].offsetWidth>172){
            var wideSpan = box.children[3];
            while(wideSpan.offsetWidth>172){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        if(box.children[3].offsetHeight>86){
            var wideSpan = box.children[3];
            while(wideSpan.offsetHeight>86){

                console.log(wideSpan.style.fontSize);
                wideSpan.style.fontSize = (wideSpan.style.fontSize.slice(0,-2))*3/4+"px";

            }
        }
        
        
        
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
        while(amount>6) {
            dispboxes[0].parentNode.removeChild(dispboxes[0]);
            amount = dispboxes.length;
        }
        
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
        
    }
    
}





function deleteAll(){

var dispboxes = document.getElementsByClassName('display-boxes');

while(dispboxes[0]) {
    dispboxes[0].parentNode.removeChild(dispboxes[0]);
}

}
