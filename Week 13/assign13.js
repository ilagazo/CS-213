function showHidden() {
    var isDuet = document.getElementById("duet").value;
    var isHidden = document.getElementById("hidden_div");
    console.log(isDuet);

    if (isDuet === "duet") {
        isHidden.removeAttribute("hidden");
        isHidden.style.display = "block";
    }
}

function hide() {
    document.getElementById("hidden_div").style.display="none";
}

function display() {
    var pType = document.getElementsByName("performance").value;
    var fName = document.getElementsByName("first_name").value;
    var lName = document.getElementsByName("last_name").value;
    var id = document.getElementsByName("student_id").value;
    var fName_2 = document.getElementsByName("first_name_2").value;
    var lName_2 = document.getElementsByName("last_name_2").value;
    var id_2 = document.getElementsByName("student_id_2").value;
    var skill = document.getElementsByName("skill").value;
    var instrument = document.getElementsByName("instrument").value;
    var location = document.getElementsByName("location").value;
    var roomNum = document.getElementsByName("room").value;
    var time = document.getElementsByName("time_slot").value;
}

// function validate() {
//     validatePerformance();
// }

// function validatePerformance() {
//     var type = document.getElementsByName("performance");
//     var errorText;

//     if (type[0].checked === true || type[1].checked === true || type[2].checked === true) {
//         errorText = null;
//     } else {
//         errorText = "Please select a Performance type.";
//     }
//     document.getElementById("performance_error").innerHTML = errorText;
// }

