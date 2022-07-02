const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', hipotenusa);

function hipotenusa(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    i = parseInt(i);
    j = parseInt(j);
    i = (i * i + j * j);
    result.innerHTML = Math.sqrt(i);
}