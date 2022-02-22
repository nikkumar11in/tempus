function changeHeroText() {
    var heroText = document.getElementById("heroTextBox");
    heroText.innerHTML = "Hello Nikhil"
}

function changeHeroParagraph() {
    var paraText = document.getElementById("heroParaBox");
    paraText.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet consectetur
    adipisicing elit Accusantium aliquid rem modi, suscipit, <span style="font-weight: bold">nemo velit cupiditate</span> repellat laborum porro
    neque amet consectetur adipisicing elit amet consectetur adipisicing financial services?`
}

changeHeroText();
changeHeroParagraph();


function alertDistribution() {
    var btn = document.getElementById("distributionButton");
    var paraText = document.getElementById("heroParaBox");
    btn.addEventListener('click', function () {
        btn.classList.add('bg-red')
        paraText.innerHTML = "Hello world! my name is nikhil"
    })
}

alertDistribution();


function add() {
    var result = document.getElementById('result');
    var btn = document.getElementById('buyToken');

    var a = parseInt(document.getElementById('one').innerHTML); // 34
    var b = parseInt(document.getElementById('two').innerHTML);  // 14

    var c = a + b; // a = 34, b = 14, 34 + 14 == 47


    btn.addEventListener('click', function () {
        result.innerHTML = c;
    })

}

add();

///////////////////////////////// New Script Start Here///////////////////////////////

function softbuttons() {
    var cap = document.getElementById('softbtn')
    cap.addEventListener('click', function () {
        cap.classList.add('soft-bg')
    })
}
softbuttons()


function softscnd() {
    var sec = document.getElementById('softsecnd')
    sec.addEventListener('click', function () {
        sec.classList.add('soft-scn')
    })
}


// financial javascript here

function financialtext() {
    var fintext = document.getElementById("system")
    fintext.innerHTML = "We make financial system work better"

}

function perahcange() {
    var peratext = document.getElementById("finpera")
    peratext.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis possimus
    blanditiis at ipsa. Nulla quidem distinctio assumenda exercitationem ex, ipsum sequi asperiores
    voluptates. Laudantium porro eius inventore hic iusto, placeat aperiam magnam minima quas quasi aut vel.
    Voluptates voluptatum sequi vero maxime! Illum system.`
}
perahcange()
financialtext()

// token J.S start here

function tokenchange() {
    var tokentext = document.getElementById("tokenhead")
    tokentext.innerHTML = "Token Sale"
}
tokenchange();

// buy token buttons

function sale() {
    var final = document.getElementById('final');
    var ken = document.getElementById('saletoken');

    var a = parseInt(document.getElementById('apple').innerHTML);
    var b = parseInt(document.getElementById('ball').innerHTML);
    var c = parseInt(document.getElementById('cat').innerHTML);
    var d = parseInt(document.getElementById('dog').innerHTML);

    var e = a + b + c + d;


    ken.addEventListener('click', function () {
        final.innerHTML = e;
    })
}
sale();


function buytokenredalert() {
    var pur = document.getElementById("saletoken")
    pur.addEventListener('click', function () {
        pur.classList.add('bg-green')
    })
}
buytokenredalert();

// about javascript start here

function wedonext() {
    var next = document.getElementById("abouthd")
    next.innerHTML = "What We Do Next"
}
wedonext()

// team section start here

function teamheadfun() {
    var team = document.getElementById("teamhead")
    team.innerHTML = "Our Devlopers"
}
teamheadfun()

// partner section

function logossection() {
    var log = document.getElementById("logos")
    log.innerHTML = "Partners"
}
logossection()

// distrip section start here

function disrtripfun() {
    var dus = document.getElementById("dusthead")
    dus.innerHTML = "Faq & Token Distrib."
}
disrtripfun()

function generatefun() {
    var gun = document.getElementById("generate")
    gun.innerHTML = "GENERAL QUESTIONS"
}
generatefun()

function cardfunction() {
    var car = document.getElementById("cardfun")
    car.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit hic dolores deleniti incidunt quod ab
    impedit corporis, molestias sequi.`
}
cardfunction()

function whaticofun() {
    var col = document.getElementById("coll")
    col.innerHTML = "What is ICO?"
}
whaticofun()

function cardtwofun() {
    var two = document.getElementById("cardtwo")
    two.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor impedit. Eaque iusto
    culpa error eos modi consectetur distinctio.`
}
cardtwofun()

function cryptofun() {
    var two = document.getElementById("crypto")
    two.innerHTML = "What cryptocurrancy can i use purchase?"
}
cryptofun()

function cardthrefun() {
    var two = document.getElementById("cardthree")
    two.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum sint enim fugiat dolor
    repellendus iste inventore assumenda sapiente.`
}
cardthrefun()

function partifun() {
    var two = document.getElementById("participt")
    two.innerHTML = "How can i participate to the token sale"
}
partifun()

function fourfunc() {
    var four = document.getElementById("cardfour")
    four.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum sint enim fugiat dolor
    repellendus iste inventore assumenda sapiente.`
}
fourfunc()

function benifitfun() {
    var four = document.getElementById("benifit")
    four.innerHTML = " How to i benefit from the token sale"
}
benifitfun()

function cardfivefun() {
    var four = document.getElementById("cardfive")
    four.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum sint enim fugiat dolor
    repellendus iste inventore assumenda sapiente.`
}
cardfivefun()

function cardsixfun() {
    var four = document.getElementById("cardsix")
    four.innerHTML = " What is the maximum price per token?"
}
cardsixfun()

function cardsevenfun() {
    var four = document.getElementById("cardseven")
    four.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum sint enim fugiat dolor
    repellendus iste inventore assumenda sapiente.`
}
cardsevenfun()

function agreefunadd() {
    var agree = document.getElementById("agree")
    agree.innerHTML = "LEGAL AGREEMENT"
}
agreefunadd()

function cardeightfun() {
    var fren = document.getElementById("cardeight")
    fren.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum sint enim fugiat dolor
    repellendus iste inventore assumenda sapiente.`
}
cardeightfun()

function nineaddfun() {
    var nine = document.getElementById("nine")
    nine.innerHTML = "TOKEN"
}
nineaddfun()

function ninecardfun() {
    var token = document.getElementById("cardnine")
    token.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum sint enim fugiat dolor
    repellendus iste inventore assumenda sapiente.`
}
ninecardfun()

function lastfunct() {
    var lav = document.getElementById("last")
    lav.innerHTML = "PRE-ICO & ICO INFORMATION"
}
lastfunct()

function staybyfun() {
    var stan = document.getElementById("stay")
    stan.innerHTML = "Fill Up Form"
}
staybyfun()

function headaddfun() {
    var more = document.getElementById("morehead")
    more.innerHTML = "Subscribe for more news"
}
headaddfun()

function peraformfun() {
    var per = document.getElementById("peraform")
    per.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, perferendis!'
}
peraformfun()


function butfunstar() {
    var form = document.getElementById("formperatext")
    form.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dolores veniam excepturi
    ullam maiores odio at possimus mollitia, modi exercitationem tenetur voluptate! Dolorem voluptatum ad
    necessitatibus provident voluptas molestiae ;)`
}
butfunstar()


function lastperatextfun() {
    var last = document.getElementById("lastperatext")
    last.innerHTML = `@Copyright CA Themes, 2018. ALL right reserved`
}
lastperatextfun()