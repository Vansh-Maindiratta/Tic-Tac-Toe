let turn;
let gameOn= true;
let clickCount =0;
let pastMoves =
[
    ["","",""],
    ["","",""],
    ["","",""]
];
const cell = document.querySelectorAll(".class")
const vline = document.querySelectorAll(".vline")
const hline = document.querySelectorAll(".hline")
const rdiagonal = document.querySelector(".rdiagonal")
const ldiagonal = document.querySelector(".ldiagonal")
const Xwins = document.querySelector(".Xwin")
const Owins = document.querySelector(".Owin")
const container = document.querySelector(".hugeContainer")

//one Player Game Variables
let onePlayer = false;
let humanMove=true;
let computerMove=false;


//Move Changing and unhiding + preventing overwriting
cell.forEach((content,index) => {
    content.addEventListener("click",() => {
        const o = content.querySelector(".O");
        const x = content.querySelector(".X");

    if(!gameOn) return;

        clickCount++;

    if(turn===0){
        x.style.opacity=1;
        turn=1;
        document.querySelector(".nextTurn").setAttribute("src","./O_Mark.svg");
        content.style.pointerEvents="none";

    //Switch case issue...over writing of content in the array but not on the screen
        switch(index){
            case 0:
                pastMoves[0][0]='X';
                break;
            case 1:
                pastMoves[0][1]='X';
                break;
            case 2:
                pastMoves[0][2]='X';
                break;
            case 3:
                pastMoves[1][0]='X';
                break;
            case 4:
                pastMoves[1][1]='X';
                break;
            case 5:
                pastMoves[1][2]='X';
                break;
            case 6:
                pastMoves[2][0]='X';
                break;
            case 7:
                pastMoves[2][1]='X';
                break;
            case 8:
                pastMoves[2][2]='X';
                break;
        }
    }else{
        o.style.opacity=1;
        turn=0;
        document.querySelector(".nextTurn").setAttribute("src","./X_Mark.svg");
        content.style.pointerEvents="none";
            switch(index){
                case 0:
                    pastMoves[0][0]='O';
                    break;
                case 1:
                    pastMoves[0][1]='O';
                    break;
                case 2:
                    pastMoves[0][2]='O';
                    break;
                case 3:
                    pastMoves[1][0]='O';
                    break;
                case 4:
                    pastMoves[1][1]='O';
                    break;
                case 5:
                    pastMoves[1][2]='O';
                    break;
                case 6:
                    pastMoves[2][0]='O';
                    break;
                case 7:
                    pastMoves[2][1]='O';
                    break;
                case 8:
                    pastMoves[2][2]='O';
                    break;
            }
    }
    
    winCheck();
    
    if(gameOn && clickCount===9){
        document.querySelector(".Draw").classList.remove("hidden");
        cell.forEach((content,ind) => {
        content.querySelector(".X").style.opacity=0;
        content.querySelector(".O").style.opacity=0;
        content.style.pointerEvents="none";
        });
        gameOn=false;
    }

    console.log(pastMoves);
     //To switch b/w computer and player
    }) 
})

function reset(){
    let X = document.querySelectorAll(".X");
    let O = document.querySelectorAll(".O");

    for(let i = 0;i < 3; i++){
            for(let j = 0;j < 3; j++){
                pastMoves[i][j]="";
            }
    }
    
    clickCount=0;

    cell.forEach((content,ind) => {
        content.style.pointerEvents="auto";
        X[ind].style.opacity=0;
        O[ind].style.opacity=0;
    })
    
    

    container.classList.remove("hidden");
    Xwins.classList.add("hidden");
    Owins.classList.add("hidden");
    document.querySelector(".Draw").classList.add("hidden");
    document.querySelector(".hlinediv").classList.add("hidden");
    document.querySelector(".vlinediv").classList.add("hidden");
    document.querySelector(".ldiagonal").style.opacity=0;
    document.querySelector(".rdiagonal").style.opacity=0;;
    
    console.log(pastMoves);

}
function updateNextTurn() {
    const img = document.querySelector(".nextTurn");

    if (turn === 0) {
        img.src = "./X_Mark.svg";
    } else if (turn === 1) {
        img.src = "./O_Mark.svg";
    }
}


function onePlayerGame(){
    let computerIndex = Math.floor(Math.random()*9);
    if(onePlayer && humanMove) return;

    row = computerIndex/3;
    col= computerIndex % 3;
    container.forEach((row,index) => {
        cell.forEach((item,point) =>{
            item[row].click();
        })
    })


    if(turn===0){
        pastMoves[row][col]="X";
    }else{
        pastMoves[row][col]="O";
    }
    humanMove=true;
    //simultaneous win checking in computer's turn krna hai abhi
    
}

function winCheck(){
        //Win condition Checking 

    //Rows
    for(let i = 0;i < 3; i++){
        if(pastMoves[i][0] !== "" && pastMoves[i][0]===pastMoves[i][1] && pastMoves[i][1]===pastMoves[i][2]){
            if(pastMoves[i][0]==='X'){
                Xwins.classList.remove("hidden");
                hline[i].style.opacity=1;
                gameOn=false;
                console.log("End Game");
            }else{
                Owins.classList.remove("hidden");
            }
            container.classList.add("hidden");
        }
    }
    
    //Columns
    for(let i = 0;i < 3; i++){
        if(pastMoves[0][i] !== "" && pastMoves[0][i]===pastMoves[1][i] && pastMoves[1][i]===pastMoves[2][i]){
            if(pastMoves[0][i]==="X"){
                vline[i].style.opacity=1;
                gameOn=false;
                console.log("End Game");
                Xwins.classList.remove("hidden");
            }else{
                Owins.classList.remove("hidden");
            }
            container.classList.add("hidden");
        }
    }

    //Equal index diagonal
    if( pastMoves[0][0] !== "" && pastMoves[0][0] === pastMoves[1][1] && pastMoves[1][1] === pastMoves[2][2]){
        ldiagonal.style.opacity=1;
        gameOn=false;
        console.log("End Game");
        if(pastMoves[0][0]==="X"){
            Xwins.classList.remove("hidden");
        }else{
            Owins.classList.remove("hidden");
        }
        container.classList.add("hidden");
    }

    //Sum 3 index diagonals
    if( pastMoves[2][0] !== "" && pastMoves[2][0]===pastMoves[1][1] && pastMoves[1][1]===pastMoves[0][2]){
        rdiagonal.style.opacity=1;
        gameOn=false;
        console.log("End Game");
        if(pastMoves[0][0]==="X"){
            Xwins.classList.remove("hidden");
        }else{
            Owins.classList.remove("hidden");
        }
        container.classList.add("hidden");
    }

    if(!gameOn){
        for(let i = 0;i < 3; i++){
            for(let j = 0;j < 3; j++){
                pastMoves[i][j]="";
            }
        }
    }
}