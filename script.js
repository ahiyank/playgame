let userscore=0;

let compscore=0;
let msg=document.querySelector("#msg2");
let u=document.querySelector("#u");
let c=document.querySelector("#c")


const choices=document.querySelectorAll(".choice");

const gencompchoice=()=>{
    let options=['rock','paper','scissors']
    let ai= Math.floor(Math.random()*3);
    return options[ai];

}
const showwinner=(userwin,choiceId,comChoice)=>{
 if(userwin){
   msg.innerHTML=`YOU WIN YOUR ${choiceId} beats ${comChoice}`;
     userscore++
    u.innerHTML=userscore
   msg.style.backgroundColor = `rgba(0,255,0,0.25) `;

 }
 
 else{
  msg.innerHTML=`YOU LOSE COMPUTER ${comChoice} beats YOUR ${choiceId}`;
 msg.style.backgroundColor ="rgba(255,0,0,0.76)";
 compscore++
 c.innerHTML=compscore
 }
 console.log(userscore,compscore)
};

const playgame = (choiceId) =>{
   console.log("user choice",choiceId);
   let comChoice= gencompchoice();
  console.log("compter choice",comChoice)
  if(choiceId===comChoice){
    msg.innerHTML="GAME WAS DRAW.PLAY AGAIN"
    msg.style.backgroundColor ="gray";

  }else{
    let userwin= true ;

    if(choiceId==="rock"){
       userwin=comChoice==="paper" ? false : true;

    }else if(choiceId==="paper"){
        userwin=comChoice==="scissors" ? false : true;

    }else {
        userwin=comChoice==="rock" ? false : true;
    }
    showwinner(userwin,choiceId,comChoice)
  }

}
 
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId=choice.getAttribute("id")

        playgame(choiceId)
    })
})
