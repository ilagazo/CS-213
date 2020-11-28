<?php
$choice = $_POST["submit"];
$outputText;
$emailText = "A Confirmation Email Has Been Sent. Please Follow The Details On The Email to Schedule Your Appointment. We Are Excited To Have You!";

if ($choice === "Confirm") {
    $outputText = "<strong>Congratulations, Your Order Has Been Confirmed!</strong><br>" . $emailText . "<br><br>Confirmation #: " . (rand());
} else {
    $outputText = "Your Order Has Been Canceled. We Hope To See You Soon!";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="assign11.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Josie's Mountain Spa Retreat: Order Status Page</title>
</head>

<body>
    <script src="assign11.js"></script>
    <h1>Josie's Mountain Spa Retreat</h1>
    <h2>Order Status Page</h2>

    <div class="banner">
        <img src="massageBanner.jpg" alt="Massage Banner">
    </div>

    <h3>Order Status:</h3>
    <div class="orderStatus_container">
        <?php echo $outputText ?>
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