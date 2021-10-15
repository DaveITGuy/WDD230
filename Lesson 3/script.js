document.getElementById('one').style.visibility = "hidden";
document.getElementById('two').style.visibility = "hidden";
document.getElementById('three').style.visibility = "hidden";

setTimeout(function(){
    document.getElementById('one').style.visibility = 'visible';
}, 1000);

setTimeout(function(){
    document.getElementById('two').style.visibility = 'visible';
    document.getElementById('popular').style.backgroundColor = "#FFCF2D";
    document.getElementById('pricing').style.fontSize = "2.2em";
}, 2000);

setTimeout(function(){
    document.getElementById('three').style.visibility = 'visible';
}, 3000);