let scoreHomeEl = document.getElementById("score-home")
let scoreAwayEl = document.getElementById("score-away")

let resultHome = parseInt(scoreHomeEl.textContent)
let resultAway = parseInt(scoreAwayEl.textContent)

let newGameEl = document.getElementById("newGame")

function addOneHome(){
    resultHome +=1
    scoreHomeEl.textContent = resultHome
}

function addTwoHome(){
    resultHome +=2
    scoreHomeEl.textContent = resultHome  
}

function addThreeHome(){
    resultHome +=3
    scoreHomeEl.textContent = resultHome 
}

function addOneAway(){
    resultAway +=1
    scoreAwayEl.textContent = resultAway
}

function addTwoAway(){
    resultAway +=2
    scoreAwayEl.textContent = resultAway  
}

function addThreeAway(){
    resultAway +=3
    scoreAwayEl.textContent = resultAway 
}

function createNewGame(){
    resultAway = 0
    resultHome = 0
    scoreHomeEl.textContent = 0
    scoreAwayEl.textContent = 0
}