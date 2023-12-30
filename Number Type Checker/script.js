
function typecheck() {
    let num1 = parseFloat(document.getElementById("num1").value);

    if (isNaN(num1)) {
        document.getElementById("p1").innerHTML = num1 + " tih is a integer"
    } else {
        document.getElementById("p1").innerHTML = num1 + " this is a float"
    }
}