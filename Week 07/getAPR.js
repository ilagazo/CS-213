function getAPR() {
    var value, errorText;

    value = document.getElementById("apr").value;

    if (isNaN(value) || value < 0 || value > 25) {
        errorText = "Input must be a number between 0 - 25.00%";
    } else if (value == "") {
        errorText = "Missing APR entry. Entry must be a number between 0 - 25.00%"
    } else {
        errorText = null;
    }
    document.getElementById("aprError").innerHTML = errorText;

    return value;
}