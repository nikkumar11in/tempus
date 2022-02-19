function changeHeroText(){
    var heroText = document.getElementById("heroTextBox");
    heroText.innerHTML = "Hello Nikhil"
}

function changeHeroParagraph(){
    var paraText = document.getElementById("heroParaBox");
    paraText.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. amet consectetur
    adipisicing elit Accusantium aliquid rem modi, suscipit, <span style="font-weight: bold">nemo velit cupiditate</span> repellat laborum porro
    neque amet consectetur adipisicing elit amet consectetur adipisicing financial services?`
}

changeHeroText();
changeHeroParagraph();


function alertDistribution(){
    var btn = document.getElementById("distributionButton");
    var paraText = document.getElementById("heroParaBox");
    btn.addEventListener('click', function(){
        btn.classList.add('bg-red')
        paraText.innerHTML = "Hello world! my name is nikhil"
    })
}

alertDistribution();


function add(){
    var result = document.getElementById('result');
    var btn = document.getElementById('buyToken');

    var a = parseInt(document.getElementById('one').innerHTML) ; // 34
    var b = parseInt(document.getElementById('two').innerHTML);  // 14

    var c = a + b; // a = 34, b = 14, 34 + 14 == 47

    
    btn.addEventListener('click', function(){
        result.innerHTML = c;
    })

}

add();