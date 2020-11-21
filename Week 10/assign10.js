function callback() {
    var xmlhttp = new XMLHttpRequest();
    var jsObj, display;
    var table = "<tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Major</th><th>G.P.A.</th></tr>";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            jsObj = JSON.parse(this.responseText);
            display = table;
        }
    };
    xmlhttp.open("GET", "assign10.php", true);
    xmlhttp.send();

}