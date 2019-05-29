class Result {
    //Przelicznik wygranej lub przegranej rundy
    static moneyWinInGame(result, bid) {
        if (result) return bid * 3;
        else return 0;
    }

    //Sprawdzenie wyniku rundy
    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0]) return true;
        else return false;
    }
}