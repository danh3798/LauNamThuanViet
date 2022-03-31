function incrementValue()
{
    var value = parseInt(document.getElementById('quanity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quanity').innerHTML = value;
}

function hideDatHang() {
    var x = document.getElementById("order-info");
    if (x.style.display != "none") {
      x.style.display = "none";
    }
}

function showDatHang() {
    var x = document.getElementById("order-info");
    if (x.style.display = "none") {
      x.style.display = "flex";
    }
}