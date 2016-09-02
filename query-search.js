function query(){
  
    var xmlHttp = new XMLHttpRequest();
    
    
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }
    
    
    
    xmlHttp.open("GET", infoyz-bkfighter.rhcloud.com, true); // true for asynchronous 
    xmlHttp.send(null);
    
}
