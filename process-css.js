var colors = ['#93FF19','#93FF19','#93FF19','#196DFF','#196DFF','#FFb619','#FFb619'];
var main = colors[Math.floor(Math.random()*7)];
console.log(main);
window.onload=function(){ process('https://rawgit.com/Infoyz/infoyz.github.io/master/desk-lap.ppcss',main,null); };
