if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker zarejestrowany! Zakres: ', registration.scope);
            })
            .catch(err => {
                console.log('Rejestracja Service Worker nie powiodła się: ', err);
            });
    });
}

const players = [

    // Orlen Oil Motor Lublin
    { name: 'Bartosz Zmarzlik', club: 'Orlen Oil Motor Lublin', age: 30, image: 'https://via.placeholder.com/150/f0d418/FFFFFF?text=BZ', stats: { avg: 2.550, points: 150, bonuses: 15 } },
    { name: 'Jack Holder', club: 'Orlen Oil Motor Lublin', age: 29, image: 'https://via.placeholder.com/150/f0d418/FFFFFF?text=JH', stats: { avg: 2.150, points: 125, bonuses: 12 } },
    { name: 'Fredrik Lindgren', club: 'Orlen Oil Motor Lublin', age: 39, image: 'https://via.placeholder.com/150/f0d418/FFFFFF?text=FL', stats: { avg: 2.050, points: 110, bonuses: 10 } },
    { name: 'Dominik Kubera', club: 'Orlen Oil Motor Lublin', age: 25, image: 'https://via.placeholder.com/150/f0d418/FFFFFF?text=DK', stats: { avg: 1.950, points: 105, bonuses: 9 } },
    { name: 'Mateusz Cierniak', club: 'Orlen Oil Motor Lublin', age: 22, image: 'https://via.placeholder.com/150/f0d418/FFFFFF?text=MC', stats: { avg: 1.550, points: 80, bonuses: 5 } },
    
    // Betard Sparta Wrocław
    { name: 'Tai Woffinden', club: 'Betard Sparta Wrocław', age: 34, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=TW', stats: { avg: 2.050, points: 130, bonuses: 12 } },
    { name: 'Maciej Janowski', club: 'Betard Sparta Wrocław', age: 33, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=MJ', stats: { avg: 2.150, points: 120, bonuses: 10 } },
    { name: 'Artiom Łaguta', club: 'Betard Sparta Wrocław', age: 34, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=AL', stats: { avg: 2.450, points: 145, bonuses: 14 } },
    { name: 'Daniel Bewley', club: 'Betard Sparta Wrocław', age: 25, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=DB', stats: { avg: 1.900, points: 100, bonuses: 8 } },
    { name: 'Bartłomiej Kowalski', club: 'Betard Sparta Wrocław', age: 22, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=BK', stats: { avg: 1.450, points: 75, bonuses: 4 } },

    // Tauron Włókniarz Częstochowa
    { name: 'Mikkel Michelsen', club: 'Tauron Włókniarz Częstochowa', age: 31, image: 'https://via.placeholder.com/150/8a2be2/FFFFFF?text=MM', stats: { avg: 2.200, points: 135, bonuses: 13 } },
    { name: 'Maksym Drabik', club: 'Tauron Włókniarz Częstochowa', age: 27, image: 'https://via.placeholder.com/150/8a2be2/FFFFFF?text=MD', stats: { avg: 1.750, points: 90, bonuses: 6 } },
    { name: 'Kacper Woryna', club: 'Tauron Włókniarz Częstochowa', age: 28, image: 'https://via.placeholder.com/150/8a2be2/FFFFFF?text=KW', stats: { avg: 1.650, points: 85, bonuses: 5 } },
    { name: 'Leon Madsen', club: 'Tauron Włókniarz Częstochowa', age: 37, image: 'https://via.placeholder.com/150/8a2be2/FFFFFF?text=LM', stats: { avg: 2.300, points: 140, bonuses: 15 } },
    
    // ebut.pl Stal Gorzów
    { name: 'Martin Vaculik', club: 'ebut.pl Stal Gorzów', age: 35, image: 'https://via.placeholder.com/150/004d99/FFFFFF?text=MV', stats: { avg: 2.400, points: 140, bonuses: 14 } },
    { name: 'Anders Thomsen', club: 'ebut.pl Stal Gorzów', age: 31, image: 'https://via.placeholder.com/150/004d99/FFFFFF?text=AT', stats: { avg: 2.000, points: 115, bonuses: 9 } },
    { name: 'Oskar Fajfer', club: 'ebut.pl Stal Gorzów', age: 30, image: 'https://via.placeholder.com/150/004d99/FFFFFF?text=OF', stats: { avg: 1.600, points: 85, bonuses: 6 } },

    // Fogo Unia Leszno
    { name: 'Janusz Kołodziej', club: 'Fogo Unia Leszno', age: 41, image: 'https://via.placeholder.com/150/cc0000/FFFFFF?text=JK', stats: { avg: 1.950, points: 105, bonuses: 11 } },
    { name: 'Grzegorz Zengota', club: 'Fogo Unia Leszno', age: 37, image: 'https://via.placeholder.com/150/cc0000/FFFFFF?text=GZ', stats: { avg: 1.550, points: 80, bonuses: 7 } },
    { name: 'Andrzej Lebiediew', club: 'Fogo Unia Leszno', age: 31, image: 'https://via.placeholder.com/150/cc0000/FFFFFF?text=AL', stats: { avg: 1.700, points: 90, bonuses: 8 } },

    // GKM Grudziądz
    { name: 'Jason Doyle', club: 'GKM Grudziądz', age: 40, image: 'https://via.placeholder.com/150/000000/FFFFFF?text=JD', stats: { avg: 2.250, points: 130, bonuses: 14 } },
    { name: 'Max Fricke', club: 'GKM Grudziądz', age: 29, image: 'https://via.placeholder.com/150/000000/FFFFFF?text=MF', stats: { avg: 1.900, points: 110, bonuses: 10 } },
    { name: 'Jaimon Lidsey', club: 'GKM Grudziądz', age: 26, image: 'https://via.placeholder.com/150/000000/FFFFFF?text=JL', stats: { avg: 1.650, points: 85, bonuses: 6 } },

    // KS Apator Toruń
    { name: 'Patryk Dudek', club: 'KS Apator Toruń', age: 32, image: 'https://via.placeholder.com/150/d22030/FFFFFF?text=PD', stats: { avg: 1.890, points: 110, bonuses: 8 } },
    { name: 'Emil Sajfutdinow', club: 'KS Apator Toruń', age: 36, image: 'https://via.placeholder.com/150/d22030/FFFFFF?text=ES', stats: { avg: 2.350, points: 145, bonuses: 15 } },
    { name: 'Robert Lambert', club: 'KS Apator Toruń', age: 27, image: 'https://via.placeholder.com/150/d22030/FFFFFF?text=RL', stats: { avg: 2.050, points: 120, bonuses: 11 } },

    // Falubaz Zielona Góra
    { name: 'Piotr Pawlicki', club: 'Falubaz Zielona Góra', age: 30, image: 'https://via.placeholder.com/150/328d32/FFFFFF?text=PP', stats: { avg: 1.750, points: 95, bonuses: 7 } },
    { name: 'Przemysław Pawlicki', club: 'Falubaz Zielona Góra', age: 31, image: 'https://via.placeholder.com/150/328d32/FFFFFF?text=PP', stats: { avg: 1.500, points: 75, bonuses: 5 } },
    { name: 'Jarosław Hampel', club: 'Falubaz Zielona Góra', age: 44, image: 'https://via.placeholder.com/150/328d32/FFFFFF?text=JH', stats: { avg: 1.650, points: 80, bonuses: 6 } }
];

document.addEventListener('DOMContentLoaded', () => {
    const playersList = document.getElementById('players-list');
    
    if (playersList) {
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');

            playerCard.innerHTML = `
                <img src="${player.image}" alt="Zdjęcie zawodnika ${player.name}">
                <h3>${player.name}</h3>
                <p>Klub: ${player.club}</p>
                <a href="player.html?name=${encodeURIComponent(player.name)}">Zobacz profil</a>
            `;

            playersList.appendChild(playerCard);
        });
    }
});
