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
  
  var isMath = /^[0-9.()*/+-]*$/.test(search);
  
  if(isMath){
  
  var mathResult = eval(search);
  console.log(mathResult);
  
  }
  
  
  
  }
