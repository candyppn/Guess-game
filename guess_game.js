function show(element) {
    element.style.display = '';
}

function hide(element) {
    element.style.display = 'none';
}

function reset() {
    document.getElementById("player_input").value = "";
}

function start_player_guess_game() {

    reset();
    show(game1);
    let random_number = Math.floor(Math.random() * 100);
    document.getElementById("try_button").addEventListener("click", function () {
        let player_number = parseInt(document.getElementById("player_input").value);
        let message = "";
        if (player_number == random_number) {
            message = "Congratulation ! You found the number!";
        } else if (player_number < random_number) {
            message = "The number is bigger !";
        } else if (player_number > random_number){
            message = "The number is smaller !";
        }
        document.getElementById("message1").innerHTML = message;
    });
}

function start_computer_guess_game() {
    show(game2);
    const smaller_button = document.getElementById("smaller-button");
    const bigger_button = document.getElementById("bigger-button");
    const found_button = document.getElementById("found-button");
    const message = document.getElementById("message2");

    let min = 1;
    let max = 101;

    const guess = () => {
        if (min == max) {
            message.innerHTML = "That's impossible !";
            return;
        }

        let currentGuess = Math.floor((min + max) / 2);
        message.innerHTML = "Is it " + currentGuess + "?";
        return currentGuess;
    }

    let currentGuess = guess();

    smaller_button.addEventListener("click", function () {
        max = currentGuess - 1;
        currentGuess = guess();
    });

    bigger_button.addEventListener("click", function () {
        min = currentGuess + 1;
        currentGuess = guess();
    });

    found_button.addEventListener("click", function () {
        message.innerHTML = "Found it! It is " + currentGuess + ".";
    });

}

function new_game() {  
    show(game_selection);
    hide(game1);
    hide(game2);
}


function init() {
    new_game();
}

window.onload = function () {
    init();
}
