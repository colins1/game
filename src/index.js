let item = document.querySelectorAll('div.b-item')
let i = 0
let it = 0
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let interval = setInterval(function() {
    if (it == 0) {
        let run = getRandomInt(item.length)
        i = run
        let elem = document.createElement("img");
        elem.setAttribute("src", "goblin.png");
        random(item[run], elem)
    } else {
        let run = getRandomInt(item.length)
        if (run == i) {
            if (run == item.length - 1) {
                run--
            } else {
                run++
            }
            i = run
            let elem = document.createElement("img");
            elem.setAttribute("src", "goblin.png");
            random(item[run], elem)
        } else {
            i = run
            let elem = document.createElement("img");
            elem.setAttribute("src", "goblin.png");
            random(item[run], elem)
        }
    }
    ++it
    
}, 400);

  
function random(randoms, elem) {
    let interval = setInterval(function() {
        randoms.appendChild(elem)
    }, 400);
    setTimeout(function() {
        clearInterval(interval);
    }, 400); 
    let rem = document.querySelector('img')
    if (rem != null) {
        rem.remove()
    }

}
  