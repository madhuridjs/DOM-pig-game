/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*var scores, roundScore, activePlayer,gamePlaying;

init();


//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener ('click',function(){
        if(gamePlaying){
            var dice = Math.floor(Math.random() * 6) + 1; //display random number
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice +'.png';
    
    if(dice !== 1)
        {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }else{
           next();     
    }
        }
        
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
        //add current score to global score
    scores[activePlayer] += roundScore;
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //check if the player won the game
    if(scores[activePlayer] >= 33){
        document.querySelector('#name-' + activePlayer).textContent ='Winner...';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        next();
    }
    }
});

function next(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            document.querySelector('.dice').style.display ='none';
           
}

document.querySelector('.btn-new').addEventListener('click' , init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-0').textContent ='Player1';
    document.querySelector('#name-1').textContent ='Player2';
    
    document.querySelector('.player-0-panel').classList.remove('Winner...');
    document.querySelector('.player-1-panel').classList.remove('Winner...');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}*/

var scores, roundScore,activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.dice').style.display= 'none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){
        
    if(gamePlaying){
    
    //Random Number 
     var dice= Math.floor(Math.random()*6)+1;                                                     
    //Display result(dice)
     var diceDom= document.querySelector('.dice');
     diceDom.style.display='block';
     diceDom.src= 'dice-' + dice +'.png';
    //update the roundscore if the number on dice was not 1
        if(dice === 6 && lastDice ===6){
            scores[activePlayer]=0;
            document.querySelector('#score-' + activePlayer).textContent=0;
            nextplayer();
        }
        else if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent= roundScore;
        }else{
            
            nextplayer();
        }
        
        lastDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){
    //add current score to global score
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    
    //Winner
    
    if(scores[activePlayer] >= 20){
        
        document.querySelector('#name-'+ activePlayer).textContent='Winner!';
        
        document.querySelector('.dice').style.display= 'none';
        
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gamePlaying=false;
        
    }else{
        
        nextplayer();
    }
    }
});

function nextplayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore=0;
            
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
           
    
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
    scores= [0,0];
    roundScore= 0;
    activePlayer= 0;
    gamePlaying=true;
    
    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
    
    
}


//dice= Math.floor(Math.random()*6)+1;

//document.querySelector('#current-' + activePlayer).textContent= dice;

/*in Html

document.querySelector('#current-' + activePlayer).innerHTML= '<em>'+dice+'</em>';*/
