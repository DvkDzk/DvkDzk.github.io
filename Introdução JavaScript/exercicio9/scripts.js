const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', media);

function media(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    var x = document.getElementById("input3").value;
    i = parseInt(i);
    j = parseInt(j);
    x = parseInt(x);
    i = ((i * 2) + (j * 3) + (x * 5))/10;
    result.innerHTML = i;
}