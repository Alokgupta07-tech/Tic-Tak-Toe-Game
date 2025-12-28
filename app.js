let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let newBtn = document.querySelector('#new-btn');


let turnO = true; // playerX, playerO


const winningpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;  
        }else{
            box.innerText = "X";
            turnO = true;  
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){ 
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){ 
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of winningpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos1Val === pos2Val && pos2Val === pos3Val){
            showwinner(pos1Val);
        }
    }
}

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add('hide');
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);