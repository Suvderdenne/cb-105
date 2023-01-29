document.getElementById("score-0").textContent=0;
document.getElementById("current-0").textContent=0;
document.getElementById("score-1").textContent=0;
document.getElementById("current-1").textContent=0;
let zurag=document.querySelector(".dice");
zurag.style.display="none";
let onoo=0;
let activePlayer=0;
document.querySelector(".btn-roll").addEventListener("click", function(){
  let shooDugaar=Math.floor(Math.random()*6)+1;
  zurag.style.display="block";
  zurag.src="dice-"+shooDugaar+".png";
  console.log(shooDugaar)
  //src="dice-3.png"
  if(shooDugaar!==1){
    onoo+=shooDugaar;
    document.getElementById("current-"+activePlayer).textContent=onoo;
  }else{
    onoo=0;
    document.getElementById("current-"+activePlayer).textContent=0;
    activePlayer===0 ? (  activePlayer=1): (activePlayer=0)
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    zurag.style.display="none";
  }
})