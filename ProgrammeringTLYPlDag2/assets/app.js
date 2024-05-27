// Function to generate random numbers
function generateRandomNumbers(min, max, count) {
    let numbers = new Set();
    while (numbers.size < count) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(num);
    }
    console.log('Generated numbers:', numbers); // Log generated numbers
    return Array.from(numbers);
}

// Function to play sound
function playSound() {
    let audio = new Audio('audio/spin_sound.wav');
    audio.play();
}

// Function to generate main numbers
function generateNumbers(count) {
    let numSelect = document.getElementById('numSelect');
    let gameSelect = document.getElementById('gameSelect');
    let game = gameSelect.options[gameSelect.selectedIndex].text;
    let min = 1, max = 0;
    switch(game) {
        case 'Lotto':
            max = 40;
            break;
        case 'EuroJackpot':
            max = 50;
            break;
        case 'VikingLotto':
            max = 48;
            break;
        case 'Keno':
            max = 70;
            break;
    }
    let numbers = generateRandomNumbers(min, max, count);
    console.log('Main Numbers:', numbers); // Log generated main numbers
    let mainNumbersContainer = document.getElementById('mainNumbersContainer');
    if (mainNumbersContainer) {
        mainNumbersContainer.innerText = 'Main Numbers: ' + numbers.join(', ');
    } else {
        mainNumbersContainer = document.createElement('div');
        mainNumbersContainer.id = 'mainNumbersContainer';
        mainNumbersContainer.innerText = 'Main Numbers: ' + numbers.join(', ');
        document.getElementById('result').appendChild(mainNumbersContainer);
    }
}

// Function to generate additional numbers
function generateLNumbers(count) {
    let lNumSelect = document.getElementById('lNumSelect');
    let gameSelect = document.getElementById('gameSelect');
    let game = gameSelect.options[gameSelect.selectedIndex].text;
    let min = 1, max = 0;
    switch(game) {
        case 'Lotto':
            max = 40;
            break;
        case 'EuroJackpot':
            max = 12;
            break;
        case 'VikingLotto':
            max = 6;
            break;
    }
    let numbers = generateRandomNumbers(min, max, count);
    console.log('Additional Numbers:', numbers); // Log generated additional numbers

    let additionalNumbersContainer = document.getElementById('additionalNumbersContainer');
    if (additionalNumbersContainer) {
        additionalNumbersContainer.innerText = 'Additional Numbers: ' + numbers.join(', ');
    } else {
        additionalNumbersContainer = document.createElement('div');
        additionalNumbersContainer.id = 'additionalNumbersContainer';
        additionalNumbersContainer.innerText = 'Additional Numbers: ' + numbers.join(', ');
        document.getElementById('result').appendChild(additionalNumbersContainer);
    }
}

// Function to generate rows
function generateRows() {
    console.log("Generating rows..."); // Add console log here
    let rowSelect = document.getElementById('rowSelect');
    let rowCount = parseInt(rowSelect.value);
    let numSelect = document.getElementById('numSelect');
    let lNumSelect = document.getElementById('lNumSelect');
    
    let mainNumberCount = parseInt(numSelect.value);
    let additionalNumberCount = parseInt(lNumSelect.value);
    
    for (let i = 0; i < rowCount; i++) {
        generateNumbers(mainNumberCount);
        generateLNumbers(additionalNumberCount);
    }
    
    // Play sound
    playSound();
}

// Function to handle button click
document.getElementById('generateButton').addEventListener('click', function() {
    console.log("Generate button clicked!"); // Add console log here
    generateRows();
});
