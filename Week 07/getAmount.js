function getAmount() {
    var loanAmt, errorText;

    loanAmt = document.getElementById("amount").value;

    if (isNaN(loanAmt) || loanAmt < 0) {
        errorText = "Input must be a number between greater than 0.";
    } else if (loanAmt == "") {
        errorText = "Missing Loan Amount entry. Entry must be a number greater than 0."
    } else {
        errorText = null;
    }
    document.getElementById("amtError").innerHTML = errorText;

    return loanAmt;
}