class Statistics {
    constructor() {
        this.gameResults = [];
    }

    //Dodawanie wyniku rundy
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
    }

    //Przekazywanie wartości do wyświetlenia
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;

        return [games, wins, losses];
    }
}