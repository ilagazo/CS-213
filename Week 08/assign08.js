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