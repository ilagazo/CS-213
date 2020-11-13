function loadDoc(str) {
    var xhttp = new XMLHttpRequest();
    // var regExp = /^[a-zA-Z]/
    if (str === "") {
        document.getElementById("country").innerHTML = "";
        return;
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status === 200 || this.status === 0) {
                document.getElementById("country").innerHTML = xhttp.responseText;
            }
        }
    };
    xhttp.open("GET", str, true);
    xhttp.send();
}

function loadFilename() {
    var xmlhttp = new XMLHttpRequest();
    var url = document.getElementById("url").value;
    console.log(url);

    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("students").innerHTML = myObj.first;
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}