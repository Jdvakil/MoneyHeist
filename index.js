function prof() {
    let x = document.getElementById("pb");
    if (x.innerHTML === "Professor") {
        x.innerHTML = "Sergio Marquina";
    } else {
        x.innerHTML = "Professor";
    }
}
function berlin() {
    let x = document.getElementById('bb');
    if (x.innerHTML === "Berlin") {
        x.innerHTML = "Andrés de Fonollosa";
    } else {
        x.innerHTML = "Berlin";
    }
}
function tokyo(){
    let x = document.getElementById('tb');
    if (x.innerHTML == 'Tokyo') {
        x.innerHTML = 'Silene Oliveira';
    } else {
        x.innerHTML = 'Tokyo'
    }
}
function denver() {
    let x = document.getElementById('db');
    if (x.innerHTML == 'Denver') {
        x.innerHTML = 'Ricardo \'Daniel\' Ramos';
    } else {
        x.innerHTML = 'Denver'
    }
}