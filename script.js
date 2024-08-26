const mainContainer = document.querySelector('.container')
const gridSetter = document.getElementById('gridSetter')

let gridSide = 16


function createDivs(num){


    for (let index = 0; index < (num * num); index++) {
        appendDiv(num)
    }
    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.addEventListener('mouseover', handleMouseOverBgColor)
    })

    boxes.forEach(box => {
        box.addEventListener('mouseover', handleMouseOverOpacity)
    })
}

function calculateDivWidthAndHeight(number){
    return (100 / number) +'%';
}

function appendDiv(num){
    let newDiv = document.createElement('div');

    newDiv.className = 'box'

    newDiv.style.width = calculateDivWidthAndHeight(num);
    newDiv.style.height = calculateDivWidthAndHeight(num);

    mainContainer.appendChild(newDiv);
    

}

function setBackGroundColorOfDiv (div){
    div.style.backgroundColor = getRandomColorRandomRgb()

    div.removeEventListener('mouseover',setBackGroundColorOfDiv(div))
}

function handleMouseOverBgColor (event){
    const target = event.currentTarget;
    target.style.backgroundColor = getRandomColorRandomRgb();
    target.style.opacity = 0;
    target.removeEventListener('mouseover', handleMouseOverBgColor)
}

function handleMouseOverOpacity(event) {
    const target = event.currentTarget;

    let currentOpacity = parseFloat(getComputedStyle(target).opacity)

    if (currentOpacity < 1 ) {
        currentOpacity += 0.1; // Increase opacity by 0.1

        currentOpacity = currentOpacity.toFixed(1)

        target.style.opacity = currentOpacity

    }
}



function getRandomColorRandomRgb(){
    let randomRgb = '0';
    let randomNumber1 = Math.floor(Math.random() * 257);
    let randomNumber2 = Math.floor(Math.random() * 257);
    let randomNumber3 = Math.floor(Math.random() * 257);

    randomRgb = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
    return randomRgb
}

gridSetter.addEventListener('click', function() {
    gridSide = prompt('Set the grid side from 0 to 100')

    while (gridSide < 0 || gridSide > 100) {
        gridSide = prompt('Set the grid side from 0 to 100')
    }
    
    removeDivs()
    createDivs(gridSide)
})

//clean previosly created divs
function removeDivs(){
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}

createDivs(16);



