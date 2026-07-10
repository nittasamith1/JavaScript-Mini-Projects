const PersonOutput = document.getElementById("PersonOutput");
const ComputerOutput = document.getElementById("ComputerOutput");
const result = document.getElementById("result");

const PersonScore = document.getElementById("PersonScore");
const ComputerScore = document.getElementById("ComputerScore");

let x=0;
let y=0;

const choice = ['Rock','Paper','Scissor'];


function ClearScore(){
    x=0;
    y=0;

PersonScore.textContent =`Person Score : ${x}`;
ComputerScore.textContent=`Computer Score : ${y}`;

}

function MainFun(para){
    const dum = choice[Math.floor(Math.random() * 3)];

    let res="";

    if(para === dum){
        res= "It's a Tie";
    }
    else{
        switch(para){
            case 'Rock':
            res = (dum==='Scissor')?'You Win':'You Lose';
            break;
            case 'Paper':
            res = (dum==='Rock')?'You Win':'You Lose';
            break;
            case 'Scissor':
            res = (dum==='Paper')?'You Win':'You Lose';
            break;
        }
    }
    result.textContent=res;
    PersonOutput.textContent=`Person : ${para}`;
    ComputerOutput.textContent = `Computer : ${dum}`;

    result.classList.remove("greencolor","redcolor");

    switch(res){
    case 'You Win':
        result.classList.add("greencolor");
        x++;
        PersonScore.textContent =`Person Score : ${x}`;
        break;
    
    case 'You Lose':
        result.classList.add('redcolor');
        y++;
        ComputerScore.textContent=`Computer Score : ${y}`;
        break;
    }
}

