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
  
  var isMath = search.replace(/\ .*/,'');
  isMath = /^[0-9.()*/+'sin''cos''asin''acos''tan''atan''sqrt'-]*$/.test(search);
  
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
  
  
  
  }


function displayMath(result){
 
    document.getElementById('middle-page-search-bar').value = result;
    
}
