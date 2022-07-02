const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', total);

function total(){
    var i = document.getElementById("input1").value;
    var j = document.getElementById("input2").value;
    var x = document.getElementById("input3").value;
    var y = document.getElementById("input4").value;
    i = parseInt(i);
    j = parseInt(j);
    x = parseInt(x);
    y = parseInt(y);
    i = (i * y) + x + (j * 0.05);
    result.innerHTML = i;
}