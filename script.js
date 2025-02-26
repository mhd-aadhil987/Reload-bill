
let popup = document.getElementById('popup');

function display() {
    let number = document.getElementById("number").value;
    let amount = document.getElementById("amount").value;       

    document.getElementById("display-number").innerText =  number;
    document.getElementById("display-amount").innerText = amount + '.00';

    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}
