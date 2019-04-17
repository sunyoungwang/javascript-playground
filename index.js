
function ButtonColor() {
    if (colorDiv.style.background == 'green'){
        colorDiv.style.background = 'white'
    } else {
        colorDiv.style.background = 'green'
    }
}

function DivColor () {
    colorDiv.style.background = 'pink'
}

function Button2Color(){
    colorDiv.style.background = 'red'
}


document.addEventListener('DOMContentLoaded', function(){
    let changeColorButton = document.querySelector('#changeColor')
    let colorDiv = document.querySelector('#colorDiv')
    let changeColorButton2 = document.querySelector('#secondButton')

    changeColorButton.addEventListener('click', ButtonColor)
    colorDiv.addEventListener('mouseover', DivColor)
    changeColorButton2.addEventListener('click', Button2Color)
    
    console.log('message')
})