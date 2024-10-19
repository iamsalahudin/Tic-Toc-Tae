let boxes = document.querySelectorAll('.box');
let Oturn = true;
let winText = document.querySelector('#winText');
let winCont = document.querySelector('.winnerCont')
let turnText = document.querySelector('#turnText')
let winSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (Oturn === true) {
            box.innerText = 'O';
            Oturn = false;
            turnText.textContent = 'X turn';
        }
        else {
            box.innerText = 'X';
            Oturn = true;
            turnText.textContent = 'O turn';
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    })
})

let checkWinner = () => {
    for (let set of winSet) {
        let setVal1 = boxes[set[0]].innerText;
        let setVal2 = boxes[set[1]].innerText;
        let setVal3 = boxes[set[2]].innerText;
        // console.log(boxes[setVal1], boxes[setVal2], boxes[setVal3]);
        if( setVal1 != '' && setVal2 != '' && setVal3 != ''){
            if(setVal1 === setVal2 && setVal2 === setVal3){
                winText.textContent = `Congratulations! Game won by ${setVal1}`;
                winCont.classList.remove('hide');
            }
        }
            // winCont.classList.remove('hide');
            // winText.textContent = 'Game Draw';
    }
}

let checkDraw = () =>{
    let countFill = 0;
    boxes.forEach(box => {
        if(box.textContent != ''){
            countFill++;
        }
    })
    if(countFill == 9){
        winCont.classList.remove('hide');
        winText.textContent = 'Game Draw';
    }
}


let gameBtns = document.querySelectorAll('.gameBtn');

function resetGame(){
    boxes.forEach(box => {
        box.disabled = false;
        box.textContent = '';
    });
    Oturn = true;
    turnText.textContent = 'O turn';
    winCont.classList.add('hide');
}

gameBtns.forEach(button =>{
    button.addEventListener('click',resetGame)
})
