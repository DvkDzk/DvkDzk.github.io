const button = document.getElementById('button');
var result = document.getElementById("result");

button.addEventListener('click', primo);

function primo(){
    var tudo = "2";
    var primo = false;
    for(var i = 2; i <= 1000; i++){
        for(var j=2; i > j && i % 2 != 0; j++){
            if(i % j != 0){
                primo = true;
            }
            else if(i % j == 0){
            primo = false;
            break;
            }
        }
        if(primo == true && i % 2 != 0){
            tudo = tudo + ' ' + i.toString();
        }
    }
    result.innerHTML = tudo;
}