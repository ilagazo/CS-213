<?php
//  This function reads the form "query string"
//  
// This function handles both an http "get".
$field1 = $_GET['apr'];
$field2 = $_GET['term'];
$field3 = $_GET['amount'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mortgage.css">
    <title>Calculation Page</title>
</head>

<body>
    <header>
        <h1>PHP Mortgage Calculator</h1>
    </header>

    <div class="container">
        <div class="item">
            <!-- Display Values -->
            <h2>Calculations:</h2>
            <h3>You Entered:</h3>
            <?php
            print "APR: $field1<br />";
            print "Term: $field2<br />";
            print "Amount: $field3<br />";
            ?>

            <h3>Your Monthly Payment Calculated To Be:</h3>
            <!-- Calculate Monthly Payment in PHP -->
            <?php
            $amt = $field3;
            $apr = $field1;
            $term = $field2;
            $monPayment = 0;

            if (is_null($term) || is_null($apr) || is_null($amt)) {
                print "Monthly Payment: $monPayment";
            } else {
                $monRate = ($apr / 100) / 12;
                $numPayments = $term * 12;
                $monPayment = $amt * (($monRate * (1 + $monRate) ** $numPayments) / (((1 + $monRate) ** $numPayments) - 1));
                echo "Monthly Payment: " . number_format((float)$monPayment, 2, '.', '');
            }
            ?>
        </div>

        <div class="item">
            <h3>Mortgage Payment Formula</h3>
            <p><b>M = P [ r(1 +r)^n / ((1+r)^n - 1)</b><br><br>
                <b>M</b> = total monthly mortgage payment.<br>
                <b>P</b> = the pirncipal loan amount.<br>
                <b>r</b> = your monthly interest rate. ((APR * 100) / 12)<br>
                <b>n</b> = number of payments over the loan's lifetime (Years * 12)
            </p>
        </div>

        <div class="item">
            <h3>What do all these grown-up terms mean?</h3>
            <p><b>Mortgage:</b> A loan taken out to buy a property or land.<br><br>
                <b>Annual Percentage Rate (APR):</b> The percentage cost of borrowing money per year.<br><br>
                <b>Loan Term:</b> A set period of time for the loan to be repaid.<br><br>
                <b>Loan Amount:</b> The initial amount of money you will borrow.<br><br>
                <b>Monthly Payment:</b> The cost of your monthly payment to repay your loan.<br></p>
        </div>
    </div>

    <footer>
        <p>The background image on this page was pulled from Google Images and all ownership belongs to its
            respective sites.<br><br>Here is a link to my other assignments: <a href="../index.html">CS213
                Assignments</a>
        </p>
    </footer>
</body>

</html>