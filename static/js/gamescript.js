
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randRpsInt());
    console.log(humanChoice);
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results[0], results[1]);
    console.log(message);
    rpsfrontEnd(humanChoice, botChoice, message);
}

function randRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsdatabase = {
        rock: { rock: 0.5, paper: 0, scissor: 1 },
        paper: { rock: 1, paper: 0.5, scissor: 0 },
        scissor: { rock: 0, paper: 1, scissor: 0.5 }
    };

    var yourScore = rpsdatabase[yourChoice][computerChoice];
    var computerScore = rpsdatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage(yourScore, computerScore) {
    if (yourScore == 0) {
        return { 'message': "You lost!", 'color': "red" };
    }

    else if (yourScore == 0.5) {
        return { 'message': "Game tied!", 'color': "yellow" };
    }

    else {
        return { 'message': "You won!", 'color': "green" };
    }
}

function rpsfrontEnd(humanImage, botImage, finalMessage) {
    var imgdatabase = {
        rock: document.getElementById('rock').src,
        paper: document.getElementById('paper').src,
        scissor: document.getElementById('scissor').src,
    };
    document.getElementById('instr').remove();
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgdatabase[humanImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage.color + "; font-size: 60px; padding: 30px;'>" + finalMessage.message + "</h1>";
    botDiv.innerHTML = "<img src='" + imgdatabase[botImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

    /*himg = document.createElement('img');
    himg.src = imgdatabase[humanImage];
    himg.setAttribute('height','150');
    himg.setAttribute('width','150');
    himg.setAttribute('style', 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)');
    humanDiv.appendChild(himg);
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    botimg = document.createElement('img');
    botimg.src = imgdatabase[botImage];
    botimg.setAttribute('height','150');
    botimg.setAttribute('width','150');
    botimg.setAttribute('style', 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)');
    humanDiv.appendChild(botimg);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);*/
}

function gameReset(){
    location.reload();
}