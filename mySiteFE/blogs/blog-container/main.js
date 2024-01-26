const phoneOption = document.getElementById("option-button")
const buttons = document.getElementById("buttons")
phoneOption.addEventListener("click", function() {
    
    buttons.style.display = buttons.style.display !== 'block' ? 'block': 'none'
    console.log('hi')
})