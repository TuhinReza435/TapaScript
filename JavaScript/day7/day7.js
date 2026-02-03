function game()
{
   console.log('this is good');
  const userChoice=prompt("Enter Rock,Paper or Scissors");
   let userChoicePrompt = userChoice.toUpperCase();
   console.log(userChoicePrompt);

   const computer=Math.floor(Math.random()*3+1);
   let computerValue="";
   if(computer==1)computerValue='rock';
   if(computer==2)computerValue='paper';
   if(computer==3)computerValue='scissors';
   computerValue=computerValue.toUpperCase();

   if(userChoicePrompt==='ROCK' && computerValue=='SCISSORS')console.log('Ami winner');
   else if(userChoicePrompt==='PAPER' && computerValue=='ROCK')console.log('Ami winner');
   else if(userChoicePrompt==='SCISSORS' && computerValue=='PAPER')console.log('Ami winner');
   else console.log('computer Wine')

}
game();