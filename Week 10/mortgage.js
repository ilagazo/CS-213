function getAPR() {
  var value, errorText;

  value = document.getElementById("apr").value;

  if (isNaN(value) || value < 0 || value > 25) {
    errorText = "Input must be a number between 0 - 25.00%";
  } else if (value === "") {
    errorText = "Missing APR entry. Entry must be a number between 0 - 25.00%";
  } else {
    errorText = null;
  }
  document.getElementById("aprError").innerHTML = errorText;
  document.getElementById("apr").focus();
}

function getTerm() {
  var loanTerm, errorText;

  loanTerm = document.getElementById("term").value;

  if (
    isNaN(loanTerm) ||
    loanTerm < 0 ||
    loanTerm > 40 ||
    parseInt(loanTerm) != loanTerm
  ) {
    errorText = "Input must be a number between 0 - 40.";
  } else if (loanTerm === "") {
    errorText =
      "Missing Loan Term entry. Entry must be a whole number between 0 - 40.";
  } else {
    errorText = null;
  }
  document.getElementById("termError").innerText = errorText;
  document.getElementById("term").focus();
}

function getAmount() {
  var loanAmt, errorText;

  loanAmt = document.getElementById("amount").value;

  if (isNaN(loanAmt) || loanAmt < 0) {
    errorText = "Input must be a number between greater than 0.";
  } else if (loanAmt === "") {
    errorText =
      "Missing Loan Amount entry. Entry must be a number greater than 0.";
  } else {
    errorText = null;
  }
  document.getElementById("amtError").innerHTML = errorText;
  document.getElementById("amount").focus();
}

function reset() {
  document.getElementById("apr").reset();
  document.getElementById("termError").reset();
  document.getElementById("term").reset();
  document.getElementById("amount").reset();
  document.getElementById("payment").reset();
}
