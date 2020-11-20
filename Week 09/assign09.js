function getCountry(str) {
    var xhttp = new XMLHttpRequest();

    if (str === "") {
        document.getElementById("country").innerHTML = "Data will display here";
        return;
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("country").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", str, true);
    xhttp.send();
}

function loadFilename() {
    var xmlhttp = new XMLHttpRequest();
    var myObj, i, x = "";
    var url = document.getElementById("url").value;
    var table = "<tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Major</th><th>G.P.A.</th></tr>";
    console.log(url);

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myObj = JSON.parse(this.responseText);
            x = table;

            // FOR Loop to access key/values in JSON OBJ after parsing
            for (i in myObj.students) {
                // Name Section of JSON
                x += "<tr><td>" + myObj.students[i].first + "</td>";
                x += "<td>" + myObj.students[i].last + "</td>";

                // Address Section of JSON 
                x += "<td>" + myObj.students[i].address.city + ", ";
                x += myObj.students[i].address.state + ", ";
                x += myObj.students[i].address.zip + "</td>";

                // Major & GPA Section of JSON
                x += "<td>" + myObj.students[i].major + "</td>";
                x += "<td>" + myObj.students[i].gpa + "</td></tr>";
            }
            document.getElementById("students").innerHTML = x;
        } else {
            // Error Message for if file not found
            document.getElementById("students").innerHTML = "ERROR: File was not found. Please check your filename and try again!";
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}