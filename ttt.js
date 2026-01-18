let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winnername = document.querySelector(".winnername");

let sign = true;

const winnerchance = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
    if(sign === true) {
        box.innerText= "X";
        sign = false;
    }
    else {
        box.innerText= "O";
        sign = true;
    }
    console.log("box is clicked");
    box.disabled = true;
    checkwinner();
    });
});

const checkwinner = () =>{
    for(let chance of winnerchance) {

     // console.log(chance[0],chance[1],chance[2]);

        console.log(
            boxes[chance[0]].innerText,
            boxes[chance[1]].innerText,
            boxes[chance[2]].innerText
        )

        let chance1 = boxes[chance[0]].innerText;
        let chance2 = boxes[chance[1]].innerText;
        let chance3 = boxes[chance[2]].innerText;

        if(chance1 !== "" && chance2 !== "" && chance3 !== ""){
            if(chance1 === chance2 && chance2 === chance3){
                console.log("winner",chance1);
                disableAllBoxes();
                displaywinner(chance1);
                return;
            }
            else {
                alert("its a draw plz restart the game");
                winnername.innerText = `its a draw`;
                winnername.style.color = "#E07A5F";
                return;
            }
        }
    }
};

const displaywinner = (chance1) => {
    winnername.innerText = `🥳${chance1}💥 Wins`;
    winnername.style.color = "#E07A5F";
    alert(`winnrr is ${chance1}`);
};

const disableAllBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

const enablebox = () => {
    for(let box of boxes){
        turn = 0;
        box.disabled = false;
        box.innerText = "";
    }
};

reset.addEventListener("click",enablebox);