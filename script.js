const totalScores = { computerScore: 0, playerScore: 0 }


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'


function getComputerChoice() {
  const choice = document.getElementsByClassName("rpsButton")
  const randomChoice = Math.floor(Math.random() * choice.length)
  return choice[randomChoice].value
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Rock')) {
    score = 1
  }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1
  }

  // return score
  return score

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const playerScoreDiv = document.getElementById('player-score')
  const handsDiv = document.getElementById('hands')


  if (score == 1) {
    resultDiv.innerText = `You win!`
  } else if (score == -1) {
    resultDiv.innerText = `You Lose!`
  } else {
    resultDiv.innerText = `It's a Draw!`
  }

handsDiv.innerText = `👨🏻${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScores['playerScore']} `

  //Computer Score :${totalScores['computerScore']}


}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScores['playerScore'] += score
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })


const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScores)
  // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame(totalScores) {
totalScores['playerScore'] = 0
  totalScores['computerScore'] = 0

const resultDiv = document.getElementById('result')
  const playerScoreDiv = document.getElementById('player-score')
  const handsDiv = document.getElementById('hands')
  
  resultDiv.innerText = ''
  playerScoreDiv.innerText = ''
  handsDiv.innerText = ''
}

playGame()
