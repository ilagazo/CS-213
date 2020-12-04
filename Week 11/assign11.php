<!-- PHP to declare and initialize variables, and calculate the total-->
<?php
$firstName = $_POST["first_name"];
$lastName = $_POST["last_name"];
$address = $_POST["address"];
$phone = $_POST["phone"];
$cType = $_POST["card"];
$cCard = $_POST["credit_card"];
$expDate = $_POST["exp_date"];
$swedish = $_POST["item_0"];
$deepTissue = $_POST["item_4"];
$couple = $_POST["item_1"];
$aroma = $_POST["item_2"];
$hotStone = $_POST["item_3"];

function calculateTotal($swedish, $deepTissue, $couple, $aroma, $hotStone) {
    $cost_0_4 = 100;
    $cost_1 = 185;
    $cost_2_3 = 125;
    $total = ($swedish * $cost_0_4) + ($deepTissue * $cost_0_4) + ($couple * $cost_1) + ($aroma * $cost_2_3) + ($hotStone * $cost_2_3);
    echo "$" . $total;
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="assign11.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Josie's Mountain Spa Retreat: Order Review Page</title>
</head>

<body>
    <script src="assign11.js"></script>
    <h1>Josie's Mountain Spa Retreat</h1>
    <h2>Order Review Page</h2>
    <h3>Please Verify Your Order</h3>

    <div class="product_container">
        <div class="product">
            <p>Price: $100</p>
            <img src="swedish.jpg" alt="Swedish Massage Package">
            <p>Swedish Massage Package<br>Quantity Ordered: <?php echo $swedish ?></p>
        </div>
        <div class="product">
            <p>Price: $100</p>
            <img src="deepTissue.jpg" alt="Deep Tissue Massage Package">
            <p>Deep Tissue Massage Package<br>Quantity Ordered: <?php echo $deepTissue ?></p>
        </div>
        <div class="product">
            <p>Price: $185</p>
            <img src="coupleMassage.jpg" alt="Couples Massage Package">
            <p>Couples Massage<br>Quantity Ordered: <?php echo $couple ?></p>
        </div>
        <div class="product">
            <p>Price: $125</p>
            <img src="aromatherapy.jpg" alt="Aromatherapy Treatment Package">
            <p>Aromatherapy Treatment Package<br>Quantity Ordered: <?php echo $aroma ?></p>
        </div>
        <div class="product">
            <p>Price: $125</p>
            <img src="hotStone.jpg" alt="Hot Stone Massage Package">
            <p>Hot Stone Massage Package<br>Quantity Ordered: <?php echo $hotStone ?></p>
        </div>
    </div>

    <p class="caption"><b>Remember:</b> Packages include complimentary meal and a choice between pedicure or manicure.</p>

    <div class="total_container">
        <p>Total: <?php calculateTotal($swedish, $deepTissue, $couple, $aroma, $hotStone) ?></p>
    </div>

    <h3>Please Verify Your Information</h3>
    <div class="container">
        <p><b>First Name:</b> <?php echo $firstName ?><br>
            <b>Last Name:</b> <?php echo $lastName ?><br>
            <b>Address:</b> <?php echo $address ?><br>
            <b>Phone #:</b> <?php echo $phone ?><br>
            <b>Credit Card Type:</b> <?php echo $cType ?><br>
            <b>Credit Card #:</b> <?php echo $cCard ?><br>
            <b>Expiration Date:</b> <?php echo $expDate ?><br></p>

        <form action="assign11_a.php" method="post">
            <button type="submit" name="submit" value="Confirm">Confirm Purchase</button>
            <button type="submit" name="submit" value="Cancel">Cancel Purchase</button>
        </form>
    </div>

    <p class="caption">Certified Secure Checkout.<br><b>Note:</b> Purchases are refundable. Please contact a member of
        our staff to learn more.
        <br>Phone #:951-391-9320<br>Office Hours: 8 A.M - 8 P.M MST (M - SAT.)</p>

    <footer>
        <p>Image on this page were pulled from Google Images and all ownership belongs to its
            respective sites.<br><br>Here is a link to my other assignments: <a href="../index.html">CS213
                Assignments</a>
        </p>
    </footer>

</body>

</html>