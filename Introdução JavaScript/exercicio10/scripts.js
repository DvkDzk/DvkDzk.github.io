const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', total);

function total(){
    var i = document.getElementById("input1").value;
    i = parseInt(i);
    if(i < 12){
        i = (i * 1.3)
    }
    result.innerHTML = i;
}