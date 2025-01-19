let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameContainer = document.querySelector(".container")

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const showWinner = (winner) => {
    msg.innerText = (`Winner is "${winner}"`);
    msgContainer.classList.remove("hide");
    gameContainer.classList.add("hide");
}

const checkWinner = () =>{
    for(let patterns of winPatterns){
        pos1Val = boxes[patterns[0]].innerText;
        pos2Val = boxes[patterns[1]].innerText;
        pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val   );
                showWinner(pos1Val);
            }
        }
    }
    disableBoxes();
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
resetGame = () => {
    for(let box of boxes){
    box.innerText = "";
    }
    msgContainer.classList.add("hide");
    gameContainer.classList.remove("hide")
}
newGame = () => {
    for(let box of boxes){
    box.innerText = "";
    }
    msgContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button is clicked");
        if(turn0){
            if(box.innerText == ""){
            box.innerText = "O";
            turn0 = false;
            }
        }else{
            if(box.innerText == ""){
            box.innerText = "X";
            turn0 = true;
            }
        }
        checkWinner();
        
    });
});

resetBtn.addEventListener("click", (resetGame));
newBtn.addEventListener("click", (newGame));