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