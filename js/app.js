function clearButton() {
    window.location.reload();
}

document.getElementById("container").onchange = function() {
    var bill = Number (document.getElementById("billInput").value);
    var tip = document.getElementById("tipInput").value;
    var people = document.getElementById("peopleInput").value;

    var totalTip = bill * (tip / 100);
    var tipEach = (bill * (tip / 100)) / people;
    var billEach = (bill + totalTip) / people;
    
    document.getElementById("tipOutput").innerHTML = "$" + tipEach.toFixed(2);
    document.getElementById("totalOutput").innerHTML = "$" + billEach.toFixed(2);
}

// Below is to update the year in the footer and not for any calculations.
var date = new Date();
var currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;