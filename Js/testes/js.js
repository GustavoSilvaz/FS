const bt = document.querySelector(".button-49u")
const re = document.querySelector(".res")

bt.onclick = function () {
    document.body.style.color = 'red'
    re.innerHTML='você clicou em miiim'
    change();
};

function change (){
    bt.style.color='red'
}