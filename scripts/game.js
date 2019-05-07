const mapVisual = document.querySelectorAll(".game_map")
const mapVisualA = document.querySelector(".level1")
const mapVisualB = document.querySelector(".level2")
const mapVisualC = document.querySelector(".level3")
const mapVisualD = document.querySelector(".level4")
const mapVisualE = document.querySelector(".level5")

// Selection des div du scoreboard

const divScoreboard1 = document.querySelector(".Score_player_rank1")
const divScoreboard2 = document.querySelector(".Score_player_rank2")
const divScoreboard3 = document.querySelector(".Score_player_rank3")
const divScoreboard4 = document.querySelector(".Score_player_rank4")
const divScoreboard5 = document.querySelector(".Score_player_rank5")

const hScoreboard1 = document.querySelector(".Score_player_rank1 .section_gamePlay_finalScore_score h2")
const hScoreboard2 = document.querySelector(".Score_player_rank2 .section_gamePlay_finalScore_score h2")
const hScoreboard3 = document.querySelector(".Score_player_rank3 .section_gamePlay_finalScore_score h2")
const hScoreboard4 = document.querySelector(".Score_player_rank4 .section_gamePlay_finalScore_score h2")
const hScoreboard5 = document.querySelector(".Score_player_rank5 .section_gamePlay_finalScore_score h2")
const hScoreboard6 = document.querySelector(".Score_player_rank6 .section_gamePlay_finalScore_score h2")

// Selection des p --> board d'informations
const pScore1 = document.querySelector("div.color1 p")
const pScore2 = document.querySelector("div.color2 p")
const pScore3 = document.querySelector("div.color3 p")
const pScore4 = document.querySelector("div.color4 p")
const pScore5 = document.querySelector("div.color5 p")
const pScore6 = document.querySelector("div.color6 p")

const pBounce = document.querySelector(".pBounce")
const pLevel = document.querySelector(".pLevel")
const hPlayer = document.querySelector(".section_gamePlay_winnerName h2")

// Scoreboard FINAL

const finalOverlay = document.querySelector(".section_gamePlay_Score")
const gameOverlay = document.querySelector(".section_gamePlay")

// Selection du scoreboard div + h1

const divScore1 = document.querySelector("div.color1")
const divScore2 = document.querySelector("div.color2")
const divScore3 = document.querySelector("div.color3")
const divScore4 = document.querySelector("div.color4")
const divScore5 = document.querySelector("div.color5")
const divScore6 = document.querySelector("div.color6")

const hScore1 = document.querySelector("div.color1 h2")
const hScore2 = document.querySelector("div.color2 h2")
const hScore3 = document.querySelector("div.color3 h2")
const hScore4 = document.querySelector("div.color4 h2")
const hScore5 = document.querySelector("div.color5 h2")
const hScore6 = document.querySelector("div.color6 h2")

// Sounds

const bounceSound = new Audio ('sounds/bounce.mp3')
const launchSound = new Audio ('sounds/golfhitball.mp3')
const selectionSound = new Audio ('sounds/selection-sound.mp3')
const blowUpSound = new Audio ('sounds/explosion.mp3')
const holeSound = new Audio ('sounds/hole-sound.mp3')
const levelSound = new Audio ('sounds/level-end.mp3')

let redShining = document.querySelectorAll(".redShining")

let level1 = document.querySelector(".level1")
let level2 = document.querySelector(".level2")
let level3 = document.querySelector(".level3")
let level4 = document.querySelector(".level4")
let level5 = document.querySelector(".level5")

let onePlayer = document.querySelector(".playerOne")
let twoPlayer = document.querySelector(".playerTwo")
let threePlayer = document.querySelector(".playerThree")
let fourPlayer = document.querySelector(".playerFour")
let fivePlayer = document.querySelector(".playerFive")
let sixPlayer = document.querySelector(".playerSix")

let move

let ball = {
  posX : 150,
  posY : 70,

  dirX : 0,
  dirY : 10,
  step : 10,
  timer : 25,
}

let levelA = {
  posXInit : 150,
  posYInit : 70,

  win : function(){

    if(ball.posY>476 && ball.posY<503 && ball.posX>137 && ball.posX<163){
      window.clearInterval(move)
      win()
      setTimeout(
        function(){
          ballVisual.style.display = "none"
        }
        ,50
      )
    }
  },

  blowUp : function(){
    if (ball.posY<=0) {
      window.clearInterval(move)
      blowUp()
    }
  },

  brick : function(){
    if(ball.posX >= 130 && ball.posX <= 170 && ball.posY>=270 && ball.posY<=280){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 130 && ball.posX <= 170 && ball.posY>=320 && ball.posY<=330){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 120 && ball.posX <= 130 && ball.posY>=270 && ball.posY<=330){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 170 && ball.posX <= 180 && ball.posY>=270 && ball.posY<=330){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },


}

// Level objet 2

let levelB = {

  win : function(){

    if(ball.posY>476 && ball.posY<503 && ball.posX>137 && ball.posX<163){
      window.clearInterval(move)
      win()
      setTimeout(
        function(){
          ballVisual.style.display = "none"
        }
        ,50
      )
    }
  },

  blowUp : function(){
    if (ball.posY<=0) {
      window.clearInterval(move)
      blowUp()
    }
  },

  brick1 : function(){
    if(ball.posX >= 120 && ball.posX <= 180 && ball.posY>=430 && ball.posY<=440){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 120 && ball.posX <= 180 && ball.posY>=450 && ball.posY<=460){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 110 && ball.posX <= 125 && ball.posY>=430 && ball.posY<=460){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 180 && ball.posX <= 190 && ball.posY>=430 && ball.posY<=460){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },

  brick2 : function(){
    if(ball.posX >= 180 && ball.posX <= 220 && ball.posY>=160 && ball.posY<=170){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 180 && ball.posX <= 220 && ball.posY>=180 && ball.posY<=190){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 170 && ball.posX <= 180 && ball.posY>=160 && ball.posY<=190){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 220 && ball.posX <= 230 && ball.posY>=160 && ball.posY<=190){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  }

}

let levelC = {

  win : function(){

    if(ball.posY>476 && ball.posY<503 && ball.posX>137 && ball.posX<163){
      window.clearInterval(move)
      win()
      setTimeout(
        function(){
          ballVisual.style.display = "none"
        }
        ,50
      )
    }
  },

  trap1 : function(){
    if(ball.posX >= 140 && ball.posX <= 160 && ball.posY>=340 && ball.posY<=360){
      window.clearInterval(move)
      blowUp()
      refreshBounce()
    }
  },

  trap2 : function(){
    if(ball.posX >= 35 && ball.posX <= 55 && ball.posY>=200 && ball.posY<=220){
      window.clearInterval(move)
      blowUp()
      refreshBounce()
    }
  },

  trap3 : function(){
    if(ball.posX >= 55 && ball.posX <= 75 && ball.posY>=400 && ball.posY<=420){
      window.clearInterval(move)
      blowUp()
      refreshBounce()
    }
  },

  trap4 : function(){
    if(ball.posX >= 260 && ball.posX <= 280 && ball.posY>=290 && ball.posY<=310){
      window.clearInterval(move)
      blowUp()
      refreshBounce()
    }
  },

}

let levelD = {

  win : function(){

    if(ball.posY>525 && ball.posY<545 && ball.posX>137 && ball.posX<163){
      window.clearInterval(move)
      win()
      setTimeout(
        function(){
          ballVisual.style.display = "none"
        }
        ,50
      )
    }
  },

  blowUp : function(){
    if (ball.posY<=0) {
      window.clearInterval(move)
      blowUp()
    }
  },

  brick1 : function(){
    if(ball.posX >= 220 && ball.posX <= 250 && ball.posY>=150 && ball.posY<=160){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 220 && ball.posX <= 250 && ball.posY>=190 && ball.posY<=200){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 220 && ball.posX <= 230 && ball.posY>=150 && ball.posY<=200){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 240 && ball.posX <= 250 && ball.posY>=150 && ball.posY<=200){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },

  brick2 : function(){
    if(ball.posX >= 75 && ball.posX <= 85 && ball.posY>=300 && ball.posY<=310){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 75 && ball.posX <= 85 && ball.posY>=340 && ball.posY<=350){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 65 && ball.posX <= 75 && ball.posY>=300 && ball.posY<=350){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 85 && ball.posX <= 95 && ball.posY>=300 && ball.posY<=350){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },

  brick4 : function(){
    if(ball.posX >= 90 && ball.posX <= 220 && ball.posY>=455 && ball.posY<=465){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >=90  && ball.posX <= 220 && ball.posY>=505 && ball.posY<=515){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 90 && ball.posX <= 100 && ball.posY>=455 && ball.posY<=515){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 210 && ball.posX <= 220 && ball.posY>=455 && ball.posY<=515){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },

}

// Objet level 5

let levelE = {

  win : function(){

    if(ball.posY>476 && ball.posY<503 && ball.posX>137 && ball.posX<163){
      window.clearInterval(move)
      win()
      setTimeout(
        function(){
          ballVisual.style.display = "none"
        }
        ,50
      )
    }
  },

  blowUp : function(){
    if (ball.posY<=0) {
      window.clearInterval(move)
      blowUp()
    }
  },

}

let bounce = 0
let playProcess = false
let cursorAngle = 0
let cursorDir = true

// Info level

let level = 1
let totalLevel = 5

// Variables infos joueurs

let score = [0,0,0,0,0,0]
let playerColor = ["","#FF1493","#00FF00","#FFFF00","#9400D3","#FFFFFF","#FFA500"]
let tabRank = new Array()
let newOrder

// Variables nombre de Joueurs

let playerNumber
let playerTab = []

let currentlyPlayerNumber = 1
let currentlyPlayer = ""

// Best scores
let bestScore = localStorage.getItem('bestScore')
let nameBestScore = localStorage.getItem('nameBestScore')
let highScore
if(bestScore == null){
  bestScore = 999;
}


// Best score maj interface

const bestScoreNameView = document.querySelector(".section_gamePlay_winner_historical_BS_Icon_1 p")
const bestSoreScoreView = document.querySelector(".section_gamePlay_winner_historical_BS_Icon_2 p")

function bestScoreView(){
  if(nameBestScore != null){
    bestScoreNameView.innerHTML = localStorage.getItem('nameBestScore')
  }
  if(bestScore != 999){
    bestSoreScoreView.innerHTML = localStorage.getItem('bestScore')
  }
}
bestScoreView()

// Création de la ball et du Curseur

const ballVisual = document.createElement("div")
const  cursorVisual = document.createElement("div")
cursorVisual.classList.add("game_cursor")
ballVisual.setAttribute("id", "game_ball");
ballVisual.appendChild(cursorVisual)
mapVisualA.appendChild(ballVisual)

// Définition nombre de joueurs

onePlayer.addEventListener('click', function(){
  playerNumber = 1
  playerTabCreation()
  divScore2.style.borderColor = "grey"
  hScore2.style.color = "grey"
  pScore2.style.color = "grey"
  divScore3.style.borderColor = "grey"
  hScore3.style.color = "grey"
  pScore3.style.color = "grey"
  divScore4.style.borderColor = "grey"
  hScore4.style.color = "grey"
  pScore4.style.color = "grey"
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"

  divScoreboard1.style.display = "none"
  divScoreboard2.style.display = "none"
  divScoreboard3.style.display = "none"
  divScoreboard4.style.display = "none"
  divScoreboard5.style.display = "none"
})

twoPlayer.addEventListener('click', function(){
  playerNumber = 2
  playerTabCreation()
  divScore3.style.borderColor = "grey"
  hScore3.style.color = "grey"
  pScore3.style.color = "grey"
  divScore4.style.borderColor = "grey"
  hScore4.style.color = "grey"
  pScore4.style.color = "grey"
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"

  divScoreboard1.style.display = "none"
  divScoreboard2.style.display = "none"
  divScoreboard3.style.display = "none"
  divScoreboard4.style.display = "none"
})

threePlayer.addEventListener('click', function(){
  playerNumber = 3
  playerTabCreation()
  divScore4.style.borderColor = "grey"
  hScore4.style.color = "grey"
  pScore4.style.color = "grey"
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"

  divScoreboard1.style.display = "none"
  divScoreboard2.style.display = "none"
  divScoreboard3.style.display = "none"
})

fourPlayer.addEventListener('click', function(){
  playerNumber = 4
  playerTabCreation()
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"

  divScoreboard1.style.display = "none"
  divScoreboard2.style.display = "none"
})

fivePlayer.addEventListener('click', function(){
  playerNumber = 5
  playerTabCreation()
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"

  divScoreboard1.style.display = "none"
})

sixPlayer.addEventListener('click', function(){
  playerNumber = 6
  playerTabCreation()
})

function playerTabCreation(){
  selectionSound.play()
  for (var i = 0; i < playerNumber; i++) {
    let tempI = i+1
    playerTab.push("Joueur "+tempI)
  }
  tabRankCreation()
}

// Fonction refresh scores

function refreshScore(){
  pScore1.innerHTML = score[0]
  pScore2.innerHTML = score[1]
  pScore3.innerHTML = score[2]
  pScore4.innerHTML = score[3]
  pScore5.innerHTML = score[4]
  pScore6.innerHTML = score[5]

}

// Fonction refresh bounce

function refreshBounce(){
  bounceSound.play()
  bounce +=1
  pBounce.innerHTML = bounce
}

// Fonction refresh level info

function refreshLevel(){
  pLevel.innerHTML = level + "/" + totalLevel
}
refreshLevel()

// Fonction refresh joueur actuel

function refreshPlayer(){
  hPlayer.innerHTML = "JOUEUR " + currentlyPlayerNumber
  hPlayer.style.color = playerColor[currentlyPlayerNumber]
}

refreshPlayer()

// Position de base de la balle

ballVisual.style.left = ball.posX+"px"
ballVisual.style.bottom = ball.posY+"px"

// EVENT Click / Entrer --> Lancer la balle


window.addEventListener('keydown', (e) => {
      if(e.code == "Enter"){
        play()
      }
    }
  )

  window.addEventListener('keydown', (e) => {
        if(e.code == "Space"){
          play()
        }
      }
    )

mapVisual.forEach(function(e){
  e.addEventListener('click', play)
})


// Clignotement item rouge

redShining.forEach(function(e){
  setInterval(function(){
    e.style.boxShadow = "0px 0px 40px 0px red"
    setTimeout(function(){
      e.style.boxShadow = "0px 0px 40px 10px red"
    }
    ,250
  )
  }
  ,500
  )
})

// Fonction PLAY + test WIN, Blow UP, bounce

function play(){
  if (playProcess == false) {
    launchSound.play()
    move = setInterval(
      function(){

        ball.posX += ball.dirX
        ball.posY += ball.dirY

        playProcess = true

        // Rebonds bordures

        if(ball.posX>=300 || ball.posX<=-10){
          ball.dirX=-ball.dirX
          refreshBounce()
        }
        if(ball.posY>=610 || ball.posY<=0){
          ball.dirY=-ball.dirY
          refreshBounce()
        }

        requestAnimationFrame(function() {

          // Actualisation du visuel de la ball

          ballVisual.style.left = ball.posX+"px"
          ballVisual.style.bottom = ball.posY+"px"

          cursorVisual.style.display = "none"


        })

        // Test Win

        if(level == 1){
          levelA.win()
        }
        if(level == 2 && playProcess == true){
          levelB.win()
        }
        if(level == 3 && playProcess == true){
          levelC.win()
        }
        if(level == 4 && playProcess == true){
          levelD.win()
        }
        if(level == 5 && playProcess == true){
          levelE.win()
        }

        // Test blowUp

        if(level == 1){
          levelA.blowUp()
        }
        if(level == 2){
          levelB.blowUp()
        }
        if(level == 3){
          levelC.trap1()
          levelC.trap2()
          levelC.trap3()
          levelC.trap4()
        }
        if(level == 4){
          levelD.blowUp()
        }
        if(level == 5){
          levelE.blowUp()
        }

        // Collision brick & autres

        if (level == 1) {
          levelA.brick()
        }
        if (level == 2) {
          levelB.brick1()
          levelB.brick2()
        }
        if (level == 4) {
          levelD.brick1()
          levelD.brick2()
          levelD.brick4()
        }

      }
      ,ball.timer)
  }
}

// Fonction convertisseur

let toDegree = function (radians) {
    return radians * (180 / Math.PI);
}

let toRadian = function (deg) {
    return deg / 180 * Math.PI;
}

// Curseur choix angle de lancement (clavier)

// window.addEventListener('keydown', (e) => {
//   if(e.code == "ArrowLeft" && playProcess == false){
//     cursorAngle = cursorAngle-5
//     cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
//     ball.dirX=Math.round(Math.sin(toRadian(cursorAngle))*ball.step)
//     ball.dirY=Math.round(Math.cos(toRadian(cursorAngle))*ball.step)
//     console.log(cursorAngle)
//   }
//   if(e.code == "ArrowRight" && playProcess == false){
//     cursorAngle = cursorAngle+5
//     cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
//     ball.dirX=Math.round(Math.sin(toRadian(cursorAngle))*ball.step)
//     ball.dirY=Math.round(Math.cos(toRadian(cursorAngle))*ball.step)
//     console.log(cursorAngle)
//   }
// })

// Fonction reset ball

function resetBall(){

  setTimeout(
    function(){

      playProcess = false

      // ball

      ball.posX = levelA.posXInit
      ball.posY = levelA.posYInit

      ballVisual.style.left = levelA.posXInit+"px"
      ballVisual.style.bottom = levelA.posYInit+"px"
      ballVisual.style.display = "block"

      // ball level 3

      if(level==3){
      }


      // Curseur

      cursorAngle = 0
      ball.dirX = 0
      ball.dirY = 10
      cursorVisual.style.display = "block"
      cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"

      pBounce.innerHTML = 0
      refreshPlayer()

    }
    ,500
  )
}

// Fonction WIN --> point

function win(){
  holeSound.play()
  playProcess = false

  score[currentlyPlayerNumber-1] += bounce

  bounce = 0
  currentlyPlayerNumber += 1
  resetBall()
  nextPlayer()
  refreshScore()
}

// Tour par Tour

function nextPlayer(){

  if(currentlyPlayerNumber>playerNumber){
    currentlyPlayerNumber -= playerNumber
    currentlyPlayer = playerTab[currentlyPlayerNumber-1]
    level +=1
    nextLevel()
  }

  ballVisual.style.backgroundColor= playerColor[currentlyPlayerNumber]
  ballVisual.style.boxShadow = "0px 0px 40px 10px " + playerColor[currentlyPlayerNumber]

}

nextPlayer()


// Fonction explosion

function blowUp(){

  blowUpSound.play()

  // Animation

  ballVisual.style.boxShadow = "0px 0px 1000px 100px" + playerColor[currentlyPlayerNumber]

  // Reset position

  setTimeout(function(){

    playProcess = false
    //bounce +=1

    // ball

    ball.posX = levelA.posXInit
    ball.posY = levelA.posYInit

    ballVisual.style.left = levelA.posXInit+"px"
    ballVisual.style.bottom = levelA.posYInit+"px"
    ballVisual.style.display = "block"

    // ball

    if(level == 5){
    }

      // Curseur

    cursorAngle = 0
    ball.dirX = 0
    ball.dirY = 10
    cursorVisual.style.display = "block"
    cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
    ballVisual.style.boxShadow = "0px 0px 100px 20px" + playerColor[currentlyPlayerNumber]

    }
    ,125
  )
}

function orderAlg(a, b) {
   if (a<b) return -1
   else if (a>b) return 1
   else return 0
 }

function nextLevel(){

  levelSound.play()

  if (level == 2) {
    setTimeout(function(){
      level1.style.display = "none"
      level2.style.display = "block"
      mapVisualA.removeChild(ballVisual)
      mapVisualB.appendChild(ballVisual)
      refreshLevel()
    }
  ,300)
  }
  if (level == 3) {
    setTimeout(function(){
      level2.style.display = "none"
      level3.style.display = "block"
      mapVisualB.removeChild(ballVisual)
      mapVisualC.appendChild(ballVisual)
      refreshLevel()
    }
  ,300)
  }
  if (level == 4) {
    setTimeout(function(){
      level3.style.display = "none"
      level4.style.display = "block"
      mapVisualC.removeChild(ballVisual)
      mapVisualD.appendChild(ballVisual)
      refreshLevel()
    }
  ,300)
  }
  if (level == 5) {
    setTimeout(function(){
      level4.style.display = "none"
      level5.style.display = "block"
      mapVisualD.removeChild(ballVisual)
      mapVisualE.appendChild(ballVisual)
      refreshLevel()
    }
  ,300)
  }
  if(level == totalLevel+1){

    setTimeout(function(){
      gameOverlay.style.display = "none"
      finalOverlay.style.visibility = "visible"

      let newOrder = score.slice(0).sort(orderAlg)
      const allRows = document.querySelector(".section_gamePlay_finalScore")

      for(let i = 0; i < newOrder.length; i++){
        // if(playerTab[score.indexOf(newOrder[i])] === undefined) return
        let child = allRows.children[i + 1]
        child.querySelector('.section_gamePlay_finalScore_joueur h2').innerHTML = playerTab[score.indexOf(newOrder[i])]
        child.querySelector('.section_gamePlay_finalScore_score h2').innerHTML = newOrder[i]
      }

      bestScoreChange()
    }
  ,300)


  }
}
// Fonction affichage classement


function tabRankCreation(){
  for (var i = 0; i < playerNumber; i++) {

  }
}

setInterval(
  function(){
    if(cursorDir == true && playProcess == false){
      cursorAngle +=5
      cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
      ball.dirX=Math.round(Math.sin(toRadian(cursorAngle))*ball.step)
      ball.dirY=Math.round(Math.cos(toRadian(cursorAngle))*ball.step)
      if(cursorAngle >= 85){
        cursorDir = false
      }
    }
    if(cursorDir == false && playProcess == false){
      cursorAngle -=5
      cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
      ball.dirX=Math.round(Math.sin(toRadian(cursorAngle))*ball.step)
      ball.dirY=Math.round(Math.cos(toRadian(cursorAngle))*ball.step)
      if(cursorAngle <= -85){
        cursorDir = true
      }
    }
  }
  ,50
)

function bestScoreChange(){

  setTimeout(function(){
    if(playerNumber == 1){
      highScore = parseInt(hScoreboard6.innerHTML)
    }
    if(playerNumber == 2){
      highScore = parseInt(hScoreboard5.innerHTML)
    }
    if(playerNumber == 3){
      highScore = parseInt(hScoreboard4.innerHTML)
    }
    if(playerNumber == 4){
      highScore = parseInt(hScoreboard3.innerHTML)
    }
    if(playerNumber == 5){
      highScore = parseInt(hScoreboard2.innerHTML)
    }
    if(playerNumber == 6){
      highScore = parseInt(hScoreboard1.innerHTML)
    }

    if(highScore<bestScore)
    {
        do{
            nameBestScore=window.prompt('Entrez 3 caractères pour sauvegarder votre score !')
        }while(nameBestScore.length != 3)

        nameBestScore=nameBestScore.toUpperCase()
        bestScore=highScore
        localStorage.setItem('bestScore', highScore)
        localStorage.setItem('nameBestScore' ,nameBestScore)
    }

  }
  ,1000
)

}
