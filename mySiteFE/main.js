const phoneOption = document.getElementById("option-button")
const buttons = document.getElementById("buttons")
const more = document.getElementById("more");
const less = document.getElementById("less");
const moreInf = document.querySelector("#moreInfo")
phoneOption.addEventListener("click", function() {
    buttons.style.display = buttons.style.display !== 'block' ? 'block': 'none'
    console.log('hi')
})

more.addEventListener("click", () => {
    more.style.display = "none"
    less.style.display = "block"
    moreInf.style.display = "block"
})
less.addEventListener("click", () => {
    less.style.display = "none"
    more.style.display = "block"
    moreInf.style.display = "none"
})