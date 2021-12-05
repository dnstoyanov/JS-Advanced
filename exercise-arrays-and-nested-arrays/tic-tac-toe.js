function ticTac(input) {

    function hasWin(field, coordinate) {
        
    };

     
    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let currentPlayerSign = 'X';

    for (let i = 0; i < input.length; i++) {
        const [x, y] = input[i].split(' ');

        if (playField[x][y]) {
            console.log(`This place is already taken. Please choose another!`);
        } else {
            playField[x][y] = currentPlayerSign;
            currentPlayerSign = currentPlayerSign == 'X' ? 'O' : 'X';
            hasWin();
        }


    }

    console.log(playField)

}

ticTac(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);
