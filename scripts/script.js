function bishBosh() {
    var length = document.getElementById("length").value;
    var bish = document.getElementById("bish").value;
    var bosh = document.getElementById("bosh").value;

    if(length <= 0 || bish < 0 || bosh < 0) return;

    let output = "Result:<br><ol>";
    for (let i = 1; i <= length; i++) {

        if(i % bish === 0 && i % bosh === 0) {
            output += "<li>" + "BishBosh" + "</li>";
        }
        else if (i % bish === 0) {
            output += "<li>" + "Bish" + "</li>";
        }
        else if (i % bosh === 0) {
            output += "<li>" + "Bosh" + "</li>";
        }
        else {
            output += "<li>" + i + "</li>";
        }    
    }
    output += "</ol>";
    var r = document.getElementById("result");
    r.innerHTML = output;
}

window.addEventListener("load", function() {
    document.getElementById("bishboshbutton").addEventListener("click", bishBosh);
});

document.getElementById("length").value = 100;
document.getElementById("bish").value = 3;
document.getElementById("bosh").value = 4;