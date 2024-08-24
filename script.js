const mainContainer = document.querySelector('.container')
// const boxes = document.querySelectorAll('.box')
const gridSetter = document.getElementById('gridSetter')

let gridSide = 16


function createDivs(num){


    for (let index = 0; index < (num * num); index++) {
        appendDiv(num)
    }
}

function calculateDivWidthAndHeight(number){
    return (100 / number) +'%';
}

function appendDiv(num){
    let newDiv = document.createElement('div');

    newDiv.className = 'box'

    newDiv.style.width = calculateDivWidthAndHeight(num);
    newDiv.style.height = calculateDivWidthAndHeight(num);

    addEventListenerToDiv(newDiv)
    mainContainer.appendChild(newDiv);
    

}


function addEventListenerToDiv (div){
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor =  'lightcoral';
    })
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



