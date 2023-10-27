function Hack() {
    var textToChange = document.getElementById("Text").value;
    document.getElementById("hackme").innerHTML = textToChange
    document.getElementById("Text").value = "";
}

function change_back() {
    let text = prompt("em desenvolvimento")
    alert(text)
}