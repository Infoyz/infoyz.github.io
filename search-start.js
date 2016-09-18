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
  
  math.replace('sin','Math.sin');
  math.replace('cos','Math.cos');
  math.replace('tan','Math.tan');
  math.replace('asin','Math.asin');
  math.replace('acos','Math.acos');
  math.replace('atan','Math.atan');
  math.replace('sqrt','Math.sqrt');
  
  var mathResult = search +" = "+ eval(math);
  displayMath(mathResult);
  
  }
  
  
  
  }


function displayMath(result){
 
    document.getElementById('middle-page-search-bar').value = result;
    
}
