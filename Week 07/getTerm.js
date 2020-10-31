function getTerm() {
    var loanTerm, errorText;

    loanTerm = document.getElementById("term").value;

    if (isNaN(loanTerm) || loanTerm < 0 || loanTerm > 40) {
        errorText = "Input must be a number between 0 - 40.";
    } else if (loanTerm == "") {
        errorText = "Missing Loan Term entry. Entry must be a number between 0 - 40."
    } else {
        errorText = null;
    }
    document.getElementById("termError").innerHTML = errorText;

    return loanTerm
}