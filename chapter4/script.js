let anouncement= document.getElementById("vs");
let computerSelection =""
const selectionChoices = document.querySelectorAll('[data-selection]')
const choice = ["r", "p", "s"]

selectionChoices.forEach(selectionDiv => { 
        selectionDiv.addEventListener('click', e => {
            const playerSelection = selectionDiv.dataset.selection
            makeSelection(playerSelection)
            const idx = Math.floor(Math.random()*choice.length)
            computerSelection = choice[idx]
            comSelection()
            checkWinner(playerSelection, computerSelection)
            disableDiv()
            changeStyle()
        })    
})

function makeSelection(selection){
    console.log("Player : " + selection)
}

function comSelection (){
    console.log("Computer : " + computerSelection);
    document.getElementById(computerSelection).style.background = "#c4c4c4";
}

function disableDiv(){
    document.getElementById("r").disabled = true;
    document.getElementById("p").disabled = true;
    document.getElementById("s").disabled = true;
}

function changeStyle() {
    anouncement.style = "position: relative; display: inline-block; vertical-align: top; font-size: 38px; width: 271.11px; height: 166.93px; background: #4C9654; color: white; border-radius: 10px; transform: rotate(-13.87deg); font-family: 'Open Sans', sans-serif;"
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        anouncement.innerHTML = "DRAW";
    }

    else if (playerSelection === 'r'){
        if(computerSelection === 'p'){
            anouncement.innerHTML = "COM WIN";
        } else {
            anouncement.innerHTML = "PLAYER 1 WIN";
        }
    }

    else if (playerSelection === 'p'){
        if (computerSelection === 's'){
            anouncement.innerHTML = "COM WIN";
        } else {
            anouncement.innerHTML = "PLAYER 1 WIN";
        }
    }

    else {
        if (computerSelection === 'r'){
            anouncement.innerHTML = "COM WIN";
        } else {
            anouncement.innerHTML = "PLAYER 1 WIN";
        }
    }

}