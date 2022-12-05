//var ProgressBar = document.getElementById('ProgressBar');
function changePrice() {
    var PriceSelected = document.getElementById("Price").value;
    switch (PriceSelected) {
        case PriceSelected = "10":
            document.getElementById("ProgressBar").style.width = "40%";
            break;
        case PriceSelected = "15":
            document.getElementById("ProgressBar").style.width = "60%";
            break;
        case PriceSelected = "20":
            document.getElementById("ProgressBar").style.width = "80%";
            break;
        case PriceSelected = "25":
            document.getElementById("ProgressBar").style.width = "100%";
            break;
    }
}