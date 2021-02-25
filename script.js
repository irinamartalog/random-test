function validation() {
    if (checkWinnersInput()) {
        if (checkParticipantsInput()); {
            if (checkNoOfParticipants()) {
                raffle()
            }
        }
    }
}

function checkWinnersInput() {
    let noWinnersImput = document.getElementById('no-winners').value;
    if (noWinnersImput.length === 0) {
        document.getElementById('error-message').innerText = 'Please specify the number of winners';

    } else {
        return true;
    }
}
function checkParticipantsInput() {
    let participantsInput = document.getElementById('participants').value;
    if (participantsInput.length === 0) {
        document.getElementById('error-message').innerText = 'Please specify the number of participants';

    } else {
        return true;
    }
}
function checkNoOfParticipants() {
    let noWinnersImput = document.getElementById('no-winners').value;
    let participantsInput = document.getElementById('participants').value;
    let participantsArray = participantsInput.split(",");
    if (participantsArray.length <= parseInt(noWinnersImput)) {
        document.getElementById('error-message').innerText = 'Number of participants should be greater than the number of winners'
    } else {
        return true;
    }
}

function raffle() {
    let noWinnersImput = parseInt(document.getElementById('no-winners').value);
    let participantsInput = document.getElementById('participants').value;
    let participantsArray = participantsInput.split(",");
    let result = [];
    for (let i = 0; i < noWinnersImput; i++) {
        let randomElement = participantsArray[Math.floor(Math.random() * participantsArray.length)];
        result.push(randomElement)
    }
    document.getElementById('winners').innerText = result.join(' ');
    console.log(result)
}