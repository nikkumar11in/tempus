function heroTExt() {
    var heroTExt = document.getElementById("heroTextBox")
    heroTExt.innerHTML = "The most powerful cryptocurrancy";

}

heroTExt()

function peraTExt() {
    var peraTExtlong = document.getElementById("heroParaBox")
    peraTExtlong.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam nobis quo fugit est. Quasi nam impedit distinctio nisi. Aperiam architecto in quo culpa eum quos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam nobis quo fugit est. Quasi nam impedit distinctio nisi. Aperiam architecto in quo culpa eum quos!'
}

// first finction
// secnd four var getElementById
// third result varfour 
// btn var getElementById
// click on btn result innerhtml 

function buyTokenFour() {
    var a = document.getElementById("one").innerHTML
    var b = document.getElementById("two").innerHTML
    var c = document.getElementById("three").innerHTML
    var d = document.getElementById("four").innerHTML
    var result = document.getElementById("result")
    var btn = document.getElementById("buyToken")

    //using parseInt to convert strings into numbers

    var plus = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)
    btn.addEventListener('click', function () {
        result.innerHTML = plus
    })
}

buyTokenFour()

function buyTokenTwon() {
    var days = document.getElementById("apple").innerHTML
    var years = document.getElementById("ball").innerHTML
    var hours = document.getElementById("cat").innerHTML
    var minut = document.getElementById("dog").innerHTML
    var empty = document.getElementById("final")
    var btnBuyToken = document.getElementById("days")

    // console.log(days)
    var total = parseInt(days) + parseInt(years) + parseInt(hours) + parseInt(minut)
    btnBuyToken.addEventListener('click', function () {
        empty.innerHTML = total
    })
}

buyTokenTwon()

peraTExt()

function buttonDistribitoion() {
    var buttonClass = document.getElementById("distributionButton")
    buttonClass.addEventListener('click', function () {
        buttonClass.classList.toggle("bg-red")
        // buttonClass.classList.add("btn")
        // buttonClass.classList.remove("bg-red")
    })
}

buttonDistribitoion()

function buyTokenButton() {
    var buyToeknButton = document.getElementById("buyToken")
    buyToeknButton.addEventListener('click', function () {
        buyToeknButton.classList.toggle("btnYellow")
    })
}

buyTokenButton()

function softBtnText() {
    var softBtnText = document.getElementById("softbtn")
    softBtnText.addEventListener('click', function () {
        softBtnText.classList.toggle("thirdBtnTexts")
    })
}

softBtnText()

function softsecndBtn() {
    var softSecnd = document.getElementById("softsecnd")
    softSecnd.addEventListener('click', function () {
        softSecnd.classList.toggle("thirdBtnTexts")
    })
}

softsecndBtn()

function hardCap() {
    var hardCapText = document.getElementById("softbtnThird")
    hardCapText.addEventListener('click', function () {
        hardCapText.classList.toggle("thirdBtnTexts")
    })
}

hardCap()

function appleText() {
    var appleText = document.getElementById("days")
    appleText.addEventListener('click', function () {
        appleText.classList.toggle("backToColor")
    })
}

appleText()


function endText() {
    var endTextBtn = document.getElementById("endingmay")
    endTextBtn.addEventListener('click', function () {
        endTextBtn.classList.toggle("thirdBtnTexts")
    })
}

endText()

function headFiNaCial() {
    var sysTmText = document.getElementById("system")
    sysTmText.innerHTML = "We make financial system works better!"
}

headFiNaCial()

function finPEra() {
    var fineEPEratext = document.getElementById("finpera")
    fineEPEratext.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam nobis quo fugit est. Quasi nam impedit distinctio nisi. Aperiam architecto in quo culpa eum quos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam nobis quo fugit est. Quasi nam impedit distinctio nisi. Aperiam architecto in quo culpa eum quos!'
}

finPEra()

function toKenSale() {
    var tokeNSale = document.getElementById("tokenhead")
    tokeNSale.innerHTML = "Token Sale"
}

toKenSale()

function weDoNExt() {
    var whatWEdonext = document.getElementById("abouthd")
    whatWEdonext.innerHTML = "What We Do Next"
}

weDoNExt()

function devrPerTeam() {
    var devloPerTeam = document.getElementById("teamhead")
    devloPerTeam.innerHTML = "Devlopers Team"
}

devrPerTeam()

function logoSFunction() {
    var loGOsFUn = document.getElementById("logos")
    loGOsFUn.innerHTML = "Partners"
}

logoSFunction()

function accorDiOnset() {
    var accoRdIan = document.getElementById("dusthead")
    accoRdIan.innerHTML = "Faq & Teken Distrib."
}

accorDiOnset()

function genERal() {
    var genACordia = document.getElementById("generate")
    genACordia.innerHTML = "GENERAL QUESTIONS"
}

genERal()

function acorDIan() {
    var accoRDiaPera = document.getElementById("cardfun")
    accoRDiaPera.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

acorDIan()

function dollFuNction() {
    var doLLfun = document.getElementById("roll")
    doLLfun.innerHTML = "What is ICO?"
}

dollFuNction()

function carDTwo() {
    var cardTWoc = document.getElementById("cardtwo")
    cardTWoc.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

carDTwo()

function cardTe() {
    var cardTHre = document.getElementById("crypto")
    cardTHre.innerHTML = "What cryptocurrencies can i use to purchase?"
}

cardTe()

function cardTHree() {
    var cardThree = document.getElementById("cardthree")
    cardThree.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

cardTHree()

function cardFOur() {
    var cardFour = document.getElementById("participt")
    cardFour.innerHTML = "How can I participate to the token sale?"
}

cardFOur()

function fourPEratext() {
    var fourPEratext = document.getElementById("cardfour")
    fourPEratext.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

fourPEratext()

function cardFIve() {
    var cardFIve = document.getElementById("benifit")
    cardFIve.innerHTML = "How do i benifit from the token sale?"
}

cardFIve()

function befitTextLike() {
    var beniFiTtext = document.getElementById("cardfive")
    beniFiTtext.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

befitTextLike()

function mxiMUmtext() {
    var maXiMum = document.getElementById("cardsix")
    maXiMum.innerHTML = "What is the maximum price per token?"
}

mxiMUmtext()

function maxMUmtextnun() {
    var maxMUmtextnun = document.getElementById("cardseven")
    maxMUmtextnun.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

maxMUmtextnun()

function agreeTExt() {
    var agreeTExtfun = document.getElementById("agree")
    agreeTExtfun.innerHTML = "LEGAL AGREEMENT"
}

agreeTExt()

function cardEIight() {
    var cardEIight = document.getElementById("cardeight")
    cardEIight.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

cardEIight()

function nineTExt() {
    var nineTExt = document.getElementById("nine")
    nineTExt.innerHTML = "TOKENS"
}

nineTExt()

function nineTEpera() {
    var nitextFun = document.getElementById("cardnine")
    nitextFun.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

nineTEpera()

function lastTExt() {
    var lastTExt = document.getElementById("last")
    lastTExt.innerHTML = "PRE-ICO & ICO INFORMATION"
}

lastTExt()

function lastPeRaText() {
    var lasTPerText = document.getElementById("lastperatext")
    lasTPerText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab in porro, sequi dolorem obcaecati veritatis iure."
}

lastPeRaText()

function staByUstext() {
    var staBYusText = document.getElementById("stay")
    staBYusText.innerHTML = "Stay by Us"
}

staByUstext()

function moreHeaDtext() {
    var moreTextBy = document.getElementById("morehead")
    moreTextBy.innerHTML = "Subscribe for more nedws"
}

moreHeaDtext()

function moreTExtPera() {
    var moreTextPEra = document.getElementById("peraform")
    moreTextPEra.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing adipisicing  elit. In."
}

moreTExtPera()

function lastPeRaText() {
    var lastPeraText = document.getElementById("formperatext")
    lastPeraText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum facere unde vel nihil voluptate, eos illo inventore dolorem molestiae doloremque assumenda dolorem molestiae doloremque assumenda sint consectetur adipisicing elit ;)"
}

lastPeRaText()

// function softCapm(){
//     var softCapm = document.getElementById("softCapOne")
//     softCapm.addEventListener('click', function(){
//         softCapm.classList.toggle("dradient")
//     })
// }

// softCapm()