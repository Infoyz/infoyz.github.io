window.addEventListener("load", init, false);

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
  
  var isMath = /^[0-9.()*/+'sin''cos''asin''acos''tan''atan''sqrt'-]*$/.test(search);
  
  if(isMath){
  
  var math = search;
  
  math = math.replace(/sin/g,'Math.sin');
  math = math.replace(/cos/g,'Math.cos');
  math = math.replace(/tan/g,'Math.tan');
  math = math.replace(/asin/g,'Math.asin');
  math = math.replace(/acos/g,'Math.acos');
  math = math.replace(/atan/g,'Math.atan');
  math = math.replace(/sqrt/g,'Math.sqrt');
  
  var mathResult = search +" = "+ eval(math);
  displayMath(mathResult);
  
  }
  
  
  
  }


function displayMath(result){
 
    document.getElementById('middle-page-search-bar').value = result;
    
}
