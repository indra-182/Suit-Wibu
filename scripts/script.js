function getCompChoose() {
    let comp = Math.random();
    if (comp < 0.33) return "batu";
    if (comp >= 0.33 && comp < 0.67 ) return "gunting";
    return "kertas";
}

function getResult (comp, player) {
    if (player == comp) return "DRAW!";
    if (player == "batu") return (comp == "gunting") ? "WIN!!!" : "LOSE!!!";
    if (player == "gunting") return (comp == "kertas") ? "WIN!!!" : "LOSE!!!";
    if (player == "kertas") return (comp == "batu") ? "WIN!!!" : "LOSE!!!";
}

function myMove() {
    const imgComp = document.querySelector(".img-komputer");
    const pic = ["batu","gunting","kertas"];
    let a = 0;
    const startTime = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute("src", "../images/" + pic[a++] + ".jfif");
        if (a == pic.length) {
            a = 0;
        }
    }, 100);
 
}

let choose = document.querySelectorAll("li img");
choose.forEach(function(chs) {
    console.log(chs);
    chs.addEventListener("click", function() {
        let compChoose = getCompChoose();
        let playerChoose = chs.className;
        let result = getResult(compChoose,playerChoose);

        myMove();

        setTimeout(() => {
            const imgComp = document.querySelector(".img-komputer");
            imgComp.setAttribute("src","../images/" + compChoose + ".jfif");

            if (result == "WIN!!!") {
                const imgComp = document.querySelector(".img-komputer")
                imgComp.setAttribute("src","../images/playerwin.jpg");
            } else if (result == "LOSE!!!") {
                const imgComp = document.querySelector(".img-komputer")
                imgComp.setAttribute("src","../images/playerlose.jpg");
            } else {
                const imgComp = document.querySelector(".img-komputer")
                imgComp.setAttribute("src","../images/draw.png");
            }
            
            const info = document.querySelector(".info");
            info.innerHTML = result;

        }, 1000);
     
    });
});

