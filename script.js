let matrix = null;
let isXNext = true;
let isGameOver = false;

function stopTheGame() {
    let BOARD = document.getElementById('tic_tac_toe');
    BOARD.innerHTML = '';
    BOARD.classList = '';
    document.getElementsByClassName('current_player')[0].innerHTML = '';
    document.getElementById('restart').style.display = 'block';
    document.getElementsByClassName('game_over')[0].style.display = 'block';
}

function drawStrikeLine(value) {
    document.getElementById('tic_tac_toe').classList.add(value);
}

function checkMatchActive() {
    const result = checkMatchOver();
    if (result) {
        let game_over_el = document.getElementsByClassName('game_over')[0];
        game_over_el.innerHTML = result;
        isGameOver = true;

        setTimeout(() => {
            if (result.includes('won')) {
                stopTheGame(); // End the game normally
            } else {
                loadTheGame(); // Auto-restart if draw
            }
        }, 2000);
    }
}

function handleBoxClick(i, j) {
    checkMatchActive();
    if (!isGameOver) {
        let data = matrix;
        if (!data[i][j]) {
            const player = isXNext ? 'X' : 'O';
            data[i][j] = player;
            const box = document.getElementsByClassName(`box_${i}_${j}`)[0];
            box.innerHTML = player;
            box.classList.add(isXNext ? 'x_class' : 'o_class');
            isXNext = !isXNext;
            loadCurrentPlayer();
            setTimeout(() => {
                checkMatchActive();
            }, 100);
        }
    }
}

function loadTheGame() {
    matrix = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    isXNext = true;
    isGameOver = false;

    document.getElementById('restart').style.display = 'none';
    document.getElementsByClassName('game_over')[0].style.display = 'none';

    const TIC_TAC_TOE = document.getElementById('tic_tac_toe');
    TIC_TAC_TOE.innerHTML = ''; // Clear previous board

    for (let i = 0; i < matrix.length; i++) {
        let outerBox = document.createElement('div');
        outerBox.setAttribute('class', 'box-outer');

        for (let j = 0; j < matrix[i].length; j++) {
            let box = document.createElement('div');
            box.innerHTML = '';
            box.setAttribute('class', `box box_${i}_${j}`);
            box.addEventListener('click', () => {
                handleBoxClick(i, j);
            });
            outerBox.appendChild(box);
        }
        TIC_TAC_TOE.appendChild(outerBox);
    }
    loadCurrentPlayer();
}

function loadCurrentPlayer() {
    let el = document.getElementsByClassName('current_player')[0];
    el.innerHTML = isXNext ? 'X' : 'O';
}

function checkMatchOver() {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] && matrix[i][1] && matrix[i][2] &&
            matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
            drawStrikeLine(`${['top', 'middle', 'bottom'][i]}_strike_${matrix[i][0]}`);
            return matrix[i][0] + ' won!';
        }
    }

    let cols = [[], [], []];
    for (let i = 0; i < 3; i++) {
        cols[0].push(matrix[i][0]);
        cols[1].push(matrix[i][1]);
        cols[2].push(matrix[i][2]);
    }

    for (let i = 0; i < cols.length; i++) {
        if (cols[i].every(cell => cell === 'X') || cols[i].every(cell => cell === 'O')) {
            drawStrikeLine(`${['left', 'middle', 'right'][i]}_vertical_strike_${cols[i][0]}`);
            return cols[i][0] + ' won!';
        }
    }

    let diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
    let diag2 = [matrix[0][2], matrix[1][1], matrix[2][0]];

    if (diag1.every(cell => cell === 'X') || diag1.every(cell => cell === 'O')) {
        drawStrikeLine(`x_cross_strike_${diag1[0]}`);
        return diag1[0] + ' won!';
    }

    if (diag2.every(cell => cell === 'X') || diag2.every(cell => cell === 'O')) {
        drawStrikeLine(`y_cross_strike_${diag2[0]}`);
        return diag2[0] + ' won!';
    }

    
    const isDraw = matrix.flat().every(cell => cell === 'X' || cell === 'O');
    if (isDraw) {
        return "It's a draw!";
    }

    return null; 
}
