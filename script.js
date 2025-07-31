let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame=document.querySelector("#newGame");
let pop=document.querySelector(".pop");
let msg=document.querySelector("#msg");

let turnX = true;
let count=0;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    count++;
    let isWinner= checkWinner();
    if(count===9 &&!isWinner){
        gameDraw();
    }
  });
});

const checkWinner = () => {
  for (pattern of winningPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
      }
    }
  }
};

const showWinner = (winner) => {
msg.innerText=`Congratulations !! Winner is ${winner}`;
pop.classList.remove("hide");
disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
    turnX=true;
    count=0;
    enableBoxes();
    pop.classList.add("hide");
};

const gameDraw=()=>{
    msg.innerText="Game was a Draw !!";
    pop.classList.remove("hide");
    disableBoxes();
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);