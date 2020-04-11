const square = document.querySelector('.container');

const squareModify = document.createElement('div');

let grow = true

square.appendChild(squareModify);

squareModify.classList.add('square');

let sizeSquare = 10; //wielkosc kwadratu

squareModify.style.width = sizeSquare + 'px';
squareModify.style.height = sizeSquare + 'px';

window.addEventListener('scroll', function(){
    if(grow == true) {
        sizeSquare += 15;
        squareModify.style.width = sizeSquare + 'px';
        squareModify.style.height = sizeSquare + 'px';

    } else {
        sizeSquare -= 15;
        squareModify.style.width = sizeSquare + 'px';
        squareModify.style.height = sizeSquare + 'px';
    }

    if (sizeSquare >= window.innerWidth / 2) {
        grow = false;
    } else if (sizeSquare == 10) {
        grow = true;
    }
    
})

const line = document.querySelector('.container1'); 

const lineModify = document.createElement('div');
line.appendChild(lineModify);

let lineSize = 10;

lineModify.classList.add('line');

lineModify.style.height = lineSize + 'px'

window.addEventListener('scroll', function() {
    if(grow == true) {
        lineSize += 5;
        lineModify.style.height = lineSize + 'px';
    } else {
        lineSize -=5;
        lineModify.style.height = lineSize + 'px';   
    }

    if(lineSize >= window.innerHeight / 2) {
        grow = false;
        lineModify.style.backgroundColor = 'green';
    } else if (lineSize == 10) {
        grow = true
        lineModify.style.backgroundColor = 'red';
    }
})
