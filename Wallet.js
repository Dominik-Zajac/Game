class Wallet {
    constructor(money) {
        let _money = money;

        // Pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        //Sprawdzenie czy użytkownik może zagrać
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        //Zmiana wartości portfela
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error('Zly typ dzialania!');
                }
            } else {
                console.log(typeof value);
                throw new Error('Nieprawidlowa liczba!');
            }
        }
    }
}