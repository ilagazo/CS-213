function getData() {
    var url = "http://localhost/cgi-bin/cs213/mileageAjaxJSON";
    var xhttp = new XMLHttpRequest();
    var myObj, inputData, outputText;

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myObj = JSON.parse(this.responseText);
            inputData = myObj.inputData;

            document.getElementsById("startCity")[0].value = inputData.startCity;
            document.getElementById("startState")[0].value = inputData.startState;
            document.getElementById("endCity")[0].value = inputData.endCity;
            document.getElementsById("endState")[0].value = inputData.endState;

            outputText = inputData.startCity + ", " + inputData.startState + ", " + inputData.endCity + ", " + inputData.endState;
            document.getElementById("output").innerHTML = outputText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
