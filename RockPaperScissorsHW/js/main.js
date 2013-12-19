var yourScore=0, botsScore=0, randoWeapo="";

document.getElementById("rock").onclick=fightWithRock;
function fightWithRock(){
	botsWeapon();
	if (randoWeapo=="rock"){
		alert("you tied!");
	}
	else 
		if (randoWeapo=="scissors"){
			 increaseYourScore();
			alert("You Win!");
			
		}
else 
	if (randoWeapo=="paper"){
		increaseBotsScore();
		alert("You Lose!");
	}
}

document.getElementById("paper").onclick=fightWithPaper;
function fightWithPaper(){
	botsWeapon();
	if (randoWeapo=="paper"){
		alert("you tied!");
	}
	else 
		if (randoWeapo=="rock"){
			 increaseYourScore();
			alert("You Win!");
			
		}
else 
	if (randoWeapo=="scissors"){
		increaseBotsScore();
		alert("You Lose!");
	}
}

document.getElementById("scissors").onclick=fightWithScissors;
function fightWithScissors(){
	botsWeapon();
	if (randoWeapo=="scissors"){
		alert("you tied!");
	}
	else 
		if (randoWeapo=="paper"){
			 increaseYourScore();
			alert("You Win!");
			
		}
else 
	if (randoWeapo=="rock"){
		increaseBotsScore();
		alert("You Lose!");
	}
}


function botsWeapon(){
	var randoWeapoNum=Math.random() ;
	if (randoWeapoNum<.333333){
		randoWeapo="rock";
	}
	else if (randoWeapoNum<.67){
		randoWeapo="paper";
	}
	else{
		randoWeapo="scissors";
	}

} 


function increaseYourScore(){
	yourScore=yourScore+1;
	document.getElementById("humanScore").innerHTML=yourScore;
}
function increaseBotsScore(){
	botsScore=botsScore+1;
	document.getElementById("computerScore").innerHTML=botsScore;

}