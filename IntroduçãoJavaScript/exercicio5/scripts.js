const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', salario);

function salario(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    i = parseInt(i);
    j = parseInt(j);
    result.innerHTML = i * (1 + (j / 100));
}