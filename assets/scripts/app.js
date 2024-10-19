
// yutish yoki yutkazish soni 
let won = document.getElementById("won")
let lost = document.getElementById("lost")
let draw = document.getElementById("draw")
let playerCounter = 0
let computerCounter = 0
let drawCounter = 0
won.innerHTML = `Player:${playerCounter}`
lost.innerHTML = `Draw:${drawCounter}`
draw.innerHTML = `Computer:${computerCounter}`

let mainContent = document.querySelector(".main-content")

// 

let qurollar = document.querySelectorAll(".qurol")
let gameStart = document.querySelector(".game-start")
let resultGame  =document.querySelector(".result-game")

// game Over va Winer textlar 


let gameOver = document.querySelectorAll(".maglubiyat")
let tenglik = document.querySelectorAll(".tenglik")
let galaba = document.querySelectorAll(".galaba")

// game Over va Winer textlar finish


// result qismi 


let leftHand = document.querySelector(".left-hand")
let rightHand = document.querySelector(".right-hand")

// result qismi 

qurollar.forEach((qurol) =>{
    qurol.addEventListener("click",function(e){

        leftHand.innerHTML = ""
        rightHand.innerHTML = ""
        

        gameStart.style.display = "flex"
        setTimeout(()=>{
        gameStart.style.display = "none"
        resultGame.style.display = "flex"

        },2250)

        userTanlovi(this.getAttribute("data-id"))
        var a = computerTanlovi()
        setTimeout(()=>{
             checkWinner(this.getAttribute('data-id'),a)
            resultGame.style.display = "none"
        },4250)
        

    })
})


function computerTanlovi(){

 let tanlov = Math.ceil(3* Math.random())
    if(tanlov === 1){
        rightHand.innerHTML += ""
        rightHand.innerHTML += ` <img src="./assets/imges/right-tosh.png" alt="">`
        return "tosh"
    }else if(tanlov === 2){
        rightHand.innerHTML += ""

        rightHand.innerHTML += `  <img src="./assets/imges/right-qogoz.png" alt="">`

        return "qogoz"
    }else if(tanlov === 3){
        rightHand.innerHTML += ""

        rightHand.innerHTML += ` <img src="./assets/imges/right-qaychi.png" alt="">`

        return "qaychi"
    }

}


//  useer tanlovini chiqarib beradigan funksiyam


function userTanlovi(userTanlovi){
    if(userTanlovi == "qogoz"){
        leftHand.innerHTML += ""

        leftHand.innerHTML += ` <img src="./assets/imges/left-qogoz-png.png" alt="">`

    }else if(userTanlovi == "tosh"){
        leftHand.innerHTML += ""

        leftHand.innerHTML += `<img src="./assets/imges/left-tosh-png.png" alt="">`

    }else if(userTanlovi == "qaychi"){
        leftHand.innerHTML += ""

        leftHand.innerHTML += ` <img src="./assets/imges/left-qaychi-norm.png" alt="">`

    }


}






function checkWinner(userTanlovi,computerTanlovi){
    if(userTanlovi == "qogoz" && computerTanlovi == "tosh"||
        userTanlovi == "qaychi" && computerTanlovi == "qogoz"||
        userTanlovi == "tosh" && computerTanlovi == "qaychi"
    ){
        playerCounter += 1
        won.innerHTML = `Player:${playerCounter}`
        galaba.forEach((gal)=>{
            gal.style.display = "inline-block"
        })
        setTimeout(()=>{
            galaba.forEach((gal)=>{
                gal.style.display = "none"
            })
        },2500)

    }else if(
        computerTanlovi == "qogoz" && userTanlovi == "tosh"||
        computerTanlovi == "qaychi" && userTanlovi == "qogoz"||
        computerTanlovi == "tosh" && userTanlovi == "qaychi"
    ){
        gameOver.forEach((gal)=>{
            gal.style.display = "inline-block"
        })
        setTimeout(()=>{
            gameOver.forEach((gal)=>{
                gal.style.display = "none"
            })
        },2500)
        computerCounter += 1
        draw.innerHTML = `Computer:${computerCounter}`
    }else if(
        computerTanlovi == "qogoz" && userTanlovi == "qogoz"||
        computerTanlovi == "qaychi" && userTanlovi == "qaychi"||
        computerTanlovi == "tosh" && userTanlovi == "tosh"
    ){
        drawCounter += 1
        lost.innerHTML = `Draw:${drawCounter}`
        tenglik.forEach((gal)=>{
            gal.style.display = "inline-block"
        })
        setTimeout(()=>{
            tenglik.forEach((gal)=>{
                gal.style.display = "none"
            })
        },2500)
    }



}

// roundlanri aniqab beradigan fuksiya 




function counterRound(){
    



}





