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
    { name: 'Bartosz Zmarzlik', club: 'Motor Lublin', age: 29, image: 'https://via.placeholder.com/150/004d99/FFFFFF?text=BZ', stats: { avg: 2.550, points: 150, bonuses: 15 } },
    { name: 'Maciej Janowski', club: 'Sparta Wrocław', age: 33, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=MJ', stats: { avg: 2.150, points: 120, bonuses: 10 } },
    { name: 'Patryk Dudek', club: 'Apator Toruń', age: 32, image: 'https://via.placeholder.com/150/004d99/FFFFFF?text=PD', stats: { avg: 1.890, points: 110, bonuses: 8 } },
    { name: 'Tai Woffinden', club: 'Sparta Wrocław', age: 34, image: 'https://via.placeholder.com/150/FF6600/FFFFFF?text=TW', stats: { avg: 2.050, points: 130, bonuses: 12 } }
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
