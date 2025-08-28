document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const playerName = params.get('name');

    if (playerName) {
        const player = players.find(p => p.name === playerName);

        if (player) {
            document.getElementById('player-image').src = player.image;
            document.getElementById('player-image').alt = `Zdjęcie zawodnika ${player.name}`;
            document.getElementById('player-name').textContent = player.name;
            document.getElementById('player-club').textContent = player.club;
            document.getElementById('player-age').textContent = `${player.age} lat`;
            document.getElementById('player-avg').textContent = player.stats.avg;
            document.getElementById('player-points').textContent = player.stats.points;
            document.getElementById('player-bonuses').textContent = player.stats.bonuses;
        } else {
            document.getElementById('player-profile').innerHTML = '<h2>Zawodnika nie znaleziono.</h2>';
        }
    }
});
