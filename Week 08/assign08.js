function calculateTotal() {
    var prod_0, prod_1, prod_2, prod_3, prod_4, cost_0, cost_1, cost_2_3, cost_4, total;

    prod_0 = document.getElementById("prod0").value;
    prod_1 = document.getElementById("prod1").value;
    prod_2 = document.getElementById("prod2").value;
    prod_3 = document.getElementById("prod3").value;
    prod_4 = document.getElementById("prod4").value;
    cost_0 = 100;
    cost_1 = 185;
    cost_2_3 = 125;
    cost_4 = 100;

    total = (prod_0 * cost_0) + (prod_1 * cost_1) + (prod_2 * cost_2_3) + (prod_3 * cost_2_3) + (prod_4 * cost_4);
    document.getElementById("totalAmt").value = total.toFixed(2);
}

function validate() {
    validatePhone();
    validateCreditCard();
    validateCreditDate();
    validateRadio();
}

function validatePhone() {
    var phoneNumber = document.getElementById("phone_input").value;
    var phoneRGEX = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    var errorText;

    if (phoneRGEX.test(phoneNumber)) {
        errorText = null;
    } else {
        errorText = "Invalid Entry; please follow this format 951-111-1111.";
    }
    document.getElementById("phone_error").innerHTML = errorText;
}

function validateCreditCard() {
    var credit = document.getElementById("card_number").value;
    var creditREGEX = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;
    var errorText;

    if (creditREGEX.test(credit)) {
        errorText = null;
    } else {
        errorText = "Invalid Entry; please follow this format 1111 1111 1111 1111.";
    }
    document.getElementById("credit_error").innerHTML = errorText;
}

function validateCreditDate() {
    var date = document.getElementById("card_exp").value;
    var dateREGEX = /(0[0-9]|1[012])\/202\d{1}/;
    var errorText;

    if (dateREGEX.test(date)) {
        errorText = null;
    } else {
        errorText = "Invalid Entry; please follow this format 01/2020.";
    }
    document.getElementById("date_error").innerHTML = errorText;
}

function validateRadio() {
    var cardtype = document.getElementsByName("card");
    var errorText;

    if (cardtype[0].checked === true || cardtype[1].checked === true || cardtype[2].checked === true) {
        errorText = null;
    } else {
        errorText = "Must select a Card Type Option.";
    }
    document.getElementById("creditType_error").innerHTML = errorText;
}

function setFocus() {
    document.getElementById("firstName").focus();
    document.getElementById("date_error").innerHTML = null;
    document.getElementById("credit_error").innerHTML = null;
    document.getElementById("creditType_error").innerHTML = null;
    document.getElementById("phone_error").innerHTML = null;
}