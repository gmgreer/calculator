let keys = document.querySelectorAll(".button")
const display = document.getElementById("display")
keys.forEach(item => {item.addEventListener('click', e => {
    console.log(e.target.value)
    display.innerHTML = e.target.value
})})



window.onload = () => {
    
}