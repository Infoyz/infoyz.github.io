window.addEventListener("load", init, false);

var xmlHttp = null;

var word;



function init(){
document.getElementById('middle-page-search-bar').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      
      searchStart(document.getElementById('middle-page-search-bar').value);
      
      return false;
    }
  }
}
  
  function searchStart(search){
  
  curSearch = search;
  
  
  
  /*     MATH SECTION         MATH SECTION          MATH SECTION                   */
  var isMath = /^[0-9.()%*/+'sin''cos''asin''acos''tan''atan''sqrt''abs''pi''E''ln''log10'-]*$/.test(search);
  
  if(isMath){
  
  var math = search;
  
  math = math.replace(/asin/g,'#');
  math = math.replace(/acos/g,'##');
  math = math.replace(/atan/g,'###');
  math = math.replace(/sin/g,'Math.sin');
  math = math.replace(/cos/g,'Math.cos');
  math = math.replace(/tan/g,'Math.tan');
  math = math.replace(/sqrt/g,'Math.sqrt');
  math = math.replace(/abs/g,'Math.abs');
  math = math.replace(/pi/g,'Math.PI');
  math = math.replace(/E/g,'Math.E');
  math = math.replace(/ln/g,'Math.log');
  math = math.replace(/log10/g,'Math.log10');
  
  math = math.replace(/###/g,'Math.atan');
  math = math.replace(/##/g,'Math.acos');
  math = math.replace(/#/g,'Math.asin');
  
  var mathResult = search +" = "+ eval(math);
  displayMath(mathResult);
  
  }
  
  
  
  
  
  
  
    /*     DICTIONARY SECTION     DICTIONARY SECTION        DICTIONARY SECTION          */
  
  var isDefine = search.includes('define')|search.includes('definition')|/^[a-zA-Z]*$/.test(search);
  
  if(isDefine){
      
      var define = search;
      
      define = define.replace(/definition/g,'');
      define = define.replace(/define/g,'');
      define = define.replace(/what/g,'');
      define = define.replace(/for/g,'');
      define = define.replace(/is/g,'');
      define = define.replace(/of/g,'');
      define = define.replace(/the/g,'');
      define = define.replace(/word/g,'');
      define = define.replace(/me/g,'');
      define = define.replace(/ /g,'');
      
      dictionaryJSON(define);
      
  }
  
  
  function dictionaryJSON(define){
    var url = "https://crossorigin.me/https://owlbot.info/api/v1/dictionary/"+define+"?format=json";

    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = processDictionary;
    xmlHttp.open( "GET", url, true );
    xmlHttp.send( null );
    
    word = define;
}

function processDictionary(){
    
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
        
        var info = eval ( "(" + xmlHttp.responseText + ")" );
        console.log(info);
        
        for(var i=0;i<info.length;i++){
            
            var content = [word,info[i].type,info[i].defenition];
            newBox('define',content);
            
        }
        
        
        
    }
}
  
  
      /*     WIKI SECTION     WIKIPEDIA SECTION        WIKI SECTION          */
      
      if(!isMath&&!search.includes('define')&&!search.includes('definition')){
    
        var url = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+search+"";

        xmlHttp = new XMLHttpRequest(); 
        xmlHttp.onreadystatechange = processWiki;
        xmlHttp.open( "GET", url, true );
        xmlHttp.send( null );
    
}
      function processWiki(){
    
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
        
        var query = eval ( "(" + xmlHttp.responseText + ")" );
        console.log(query);
        query = query.query.search;
        
        for(var i=0;i<query.length&&i<4;i++){
            
            var content = [query[i].title,query[i].snippet];
            newBox('wiki',content);
            
        }
        
        
        
    }
}
      
      
      
      
      
  
  
  
  }


function displayMath(result){
 
    newBox('math',result);
    
}
