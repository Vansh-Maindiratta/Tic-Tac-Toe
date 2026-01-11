let onePlayer = false;
let turn;
let gameOn= true;
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


//Move Changing and unhiding + preventing overwriting
cell.forEach((content,index) => {
    content.addEventListener("click",() => {
        const o = content.querySelector(".O");
        const x = content.querySelector(".X");
    if(!gameOn) return;

    
    if(turn===0){
        x.style.opacity=1;
        turn=1;
        o.remove();
        document.querySelector(".nextTurn").setAttribute("src","./O_Mark.svg");



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
        o.style.opacity=100;
        turn=0;
        x.remove();
        document.querySelector(".nextTurn").setAttribute("src","./X_Mark.svg");
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
    console.log(pastMoves);
    }) 
    


})

function reset(){
    for(let i = 0;i < 3; i++){
            for(let j = 0;j < 3; j++){
                pastMoves[i][j]="";
            }
    }
    cell.forEach(dbba => {
        if(dbba.querySelector(".O")!==null){
            dbba.querySelector(".O").style.opacity=0;
        }else{
            dbba.querySelector(".X").style.opacity=0;
        }
    })
    
    container.classList.remove("hidden");
    Xwins.classList.add("hidden");
    Owins.classList.add("hidden");

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
