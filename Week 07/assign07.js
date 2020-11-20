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

  return value;
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

  return loanTerm;
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

  return loanAmt;
}

function reset() {
  document.getElementById("apr").reset();
  document.getElementById("termError").reset();
  document.getElementById("term").reset();
  document.getElementById("amount").reset();
  document.getElementById("payment").reset();
}

function getMonthlyPayment() {
  var loanAmt, term, apr, monRate, numPayments, monPayment;

  monPayment = 0;
  term = getTerm();
  apr = getAPR();
  loanAmt = getAmount();

  if (term === "" || apr === "" || loanAmt === "") {
    document.getElementById("payment").value = monPayment;
  } else {
    monRate = apr / 100 / 12;
    numPayments = term * 12;
    monPayment =
      loanAmt *
      ((monRate * Math.pow(1 + monRate, numPayments)) /
        (Math.pow(1 + monRate, numPayments) - 1));
    document.getElementById("payment").value = monPayment.toFixed(2);
  }
}
