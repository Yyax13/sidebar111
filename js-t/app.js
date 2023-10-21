function Hack() {
    var textToChange = document.getElementById("Text").value;
    document.getElementById("hackme").textContent = textToChange;
    document.getElementById("Text").value = "";
}
