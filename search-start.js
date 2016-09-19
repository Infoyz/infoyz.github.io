window.addEventListener("load", init, false);

var xmlHttp = null;





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
  
  
  
  
  
  /*     MATH SECTION         MATH SECTION          MATH SECTION                   */
  var isMath = /^[0-9.()*/+'sin''cos''asin''acos''tan''atan''sqrt'-]*$/.test(search);
  
  if(isMath){
  
  var math = search;
  
  math = math.replace(/asin/g,'#');
  math = math.replace(/acos/g,'##');
  math = math.replace(/atan/g,'###');
  math = math.replace(/sin/g,'Math.sin');
  math = math.replace(/cos/g,'Math.cos');
  math = math.replace(/tan/g,'Math.tan');
  math = math.replace(/sqrt/g,'Math.sqrt');
  
  math = math.replace(/#/g,'Math.asin');
  math = math.replace(/##/g,'Math.acos');
  math = math.replace(/###/g,'Math.atan');
  
  var mathResult = search +" = "+ eval(math);
  displayMath(mathResult);
  
  }
  
  
  
  
  
  
  
    /*     DICTIONARY SECTION     DICTIONARY SECTION        DICTIONARY SECTION          */
  
  var isDefine = /^['define''definition']*$/.test(search);
  
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
      define = define.replace(/ /g,'');
      
      dictionaryJSON(define);
      
  }
  
  
  function dictionaryJSON(define)
{
    var url = "https://owlbot.info/api/v1/dictionary/"+define+"?format=json";

    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open( "GET", url, true );
    xmlHttp.send( null );
}

function ProcessRequest() 
{
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        
            var info = eval ( "(" + xmlHttp.responseText + ")" );
            
            console.log(info);
            
    }
}
  
  
  
  
  
  
  
  
  
  
  
  }


function displayMath(result){
 
    document.getElementById('middle-page-search-bar').value = result;
    
}
