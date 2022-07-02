const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', hipotenusa);

function hipotenusa(){
    var i = document.getElementById("input1").value;
    i = parseInt(i);
    i = ((i - 32) * 5)/9;
    result.innerHTML = i;
}