function changeColor(){
    var x = Math.floor((Math.random()*256)+1);
var y = Math.floor((Math.random()*256)+1);
var z = Math.floor((Math.random()*256)+1);

document.querySelector('body').style.backgroundColor = "rgb("+x+","+y+","+z+")";
}
changeColor();