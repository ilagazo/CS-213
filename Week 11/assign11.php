<!-- PHP to declare and initialize variables -->
<?php
$firstName = $_POST["first_name"];
$lastName = $_POST["last_name"];
$address = $_POST["address"];
$phone = $_POST["phone"];
$cType = $_POST["card"];
$cCard = $_POST["credit_card"];
$expDate = $_POST["exp_date"];
// $swedish = $_POST["item_0"];
$swedish = 10;
$deepTissue = $_POST["item_4"];
$couple = $_POST["item_1"];
$aroma = $_POST["item_2"];
$hotStone = $_POST["item_3"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="assign11.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Josie's Mountain Spa Retreat: Confirmation Review Page</title>
</head>

<body>
    <script src="assign11.js"></script>
    <h1>Josie's Mountain Spa Retreat</h1>
    <h2>Confirmation Review Page</h2>
    <h3>Please Verify Your Information Before Confirming Your Order</h3>
    <div class="container">
        <p>First Name: <?php echo $firstName ?></p>
        <p>Last Name: <?php echo $lastName ?></p>
        <p>Address <?php echo $address ?></p>
        <p>Phone #: <?php echo $phone ?></p>
        <p>Credit Card Type: <?php echo $cType ?></p>
        <p>Credit Card #: <?php echo $cCard ?></p>
        <p>Expiration Date: <?php echo $expDate ?></p>
    </div>

    <div class="product_container">
        <div class="product">
            <p>Price: $100</p>
            <img src="swedish.jpg" alt="Swedish Massage Package">
            <p>Swedish Massage Package<br>Quantity Ordered: <?php echo $swedish ?></p>
        </div>
    </div>

</body>

</html>