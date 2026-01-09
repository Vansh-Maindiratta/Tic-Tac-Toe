let turn = 0;
const pastMoves =
[
    ["","",""],
    ["","",""],
    ["","",""]
];
const cell = document.querySelectorAll(".class")

//Move Changing and unhiding + preventing overwriting
cell.forEach((content,index) => {
    content.addEventListener("click",() => {
        const o = content.querySelector(".O");
        const x = content.querySelector(".X");
    
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
            console.log("End Game");
            alert("Game ends");
        }
    }
    
    //Columns
    for(let i = 0;i < 3; i++){
        if(pastMoves[0][i] !== "" && pastMoves[0][i]===pastMoves[1][i] && pastMoves[1][i]===pastMoves[2][i]){
            console.log("End Game");
            alert("Game ends");
        }
    }

    //Equal index diagonal
    if(pastMoves[0][0] === pastMoves[1][1] && pastMoves[1][1] === pastMoves[2][2]){
        console.log("End Game");
        alert("Game ends");
    }

    //Sum 3 index diagonals
    if(pastMoves[2][0]===pastMoves[1][1]===pastMoves[0][2]){
        console.log("End Game");
        alert("Game ends");
    }

    console.log(pastMoves);
    })
})