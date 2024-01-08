let sharePanel = document.getElementById('share-panel-container')
let btn = document.getElementById('share-icon')
let flecha = document.getElementById('flecha')
btn.addEventListener('click',activar)
function activar(){
    sharePanel.style.display = "block"
    btn.style.backgroundColor = "var(--GrayishBlue)"
}