


let c = document.querySelector("#computer-choice");

let d = document.querySelector("#user-choice");

document.querySelector("#rock").addEventListener("click", first);
document.querySelector("#paper").addEventListener("click", first);

document.querySelector("#scissor").addEventListener("click", first);

function first() {
 
let a = document.querySelectorAll("button")
a =Array.from(a)
a.pop()
let b = a[Math.floor(Math.random() * 3)].dataset.choice;

let c = document.querySelector("#computer-choice");
c.setAttribute("class", "forsize");
c.src = b;


  d.src = this.dataset.choice;
  
  document.querySelectorAll("img").forEach((element) => {
    element.setAttribute("class", "forsize");

  });
  
  second();
  third();
}


function second(){
if (c.src.includes("scissor.png") && d.src.includes("paper.png")) {
  document.querySelector("#result").innerHTML = "<b>You Lose</b>";
} else if (c.src.includes("stone.png") && d.src.includes("paper.png")) {
  document.querySelector("#result").innerHTML = "<b>You Win</b>";
} else if (c.src.includes("paper.png") && d.src.includes("stone.png")) {
  document.querySelector("#result").innerHTML = "<b>You Lose</b>";
} else if (c.src.includes("paper.png") && d.src.includes("scissor.png")) {
  document.querySelector("#result").innerHTML = "<b>You Win</b>";
} else if (c.src.includes("stone.png") && d.src.includes("scissor.png")) {
  document.querySelector("#result").innerHTML = "<b>You Lose</b>";
} else if (c.src.includes("scissor.png") && d.src.includes("stone.png")) {
  document.querySelector("#result").innerHTML = "<b>You Win</b>";
} else {
  if (d.src.includes(c.src))
    document.querySelector("#result").innerHTML = "<b>Draw</b>";
}
}


function third(){

  document.querySelector("#rock").removeEventListener("click", first);
  document.querySelector("#paper").removeEventListener("click", first);
  
  document.querySelector("#scissor").removeEventListener("click", first);
  



}

let g = document.querySelector("#play-again-button");
g.addEventListener("click", function(){
  window.location.reload();
})