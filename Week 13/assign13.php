<?php
    // Declare & initialize variables
    $firstName = $_POST["first_name"];
    $lastName = $_POST["last_name"];
    $studentId = $_POST["student_id"];
    $firstName_2 = $_POST["first_name_2"];
    $lastName_2 = $_POST["last_name_2"];
    $studentId_2 = $_POST["student_id_2"];
    $pType = $_POST["performance"];
    $skill = $_POST["skill"];
    $instrument = $_POST["instrument"];
    $location = $_POST["location"];
    $roomNum = $_POST["room"];
    $time = $_POST["time_slot"];

    // Open file 
    $file = fopen("studentRegistry.txt", "w") or die("Unable to open file!");

    // Write to file
    $txt = "First name: " . $firstName . "\n" . "Last name: " . $lastName . "\n" . "Student ID: " . $studentId
    . "Performance: " . $pType . "\n" . "Skill Level: " . $skill . "\n" . "Instrument: " . $instrument . "\n"
    . "Location: " . $location . "\n" . "Room #: " . $roomNum . "\n" . "Time Slot: " . $time . "\n";

    fwrite($file, $txt);

    // Close File
    fclose($file);
?>
