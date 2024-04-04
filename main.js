async function fetchPokemonData() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error('Pokemon not found.');
        }

        const data = await response.json();

        displayPokemonName(data.name);
        displayPokemonImage(data.sprites.front_default);
        displayPokemonAbilities(data.abilities);
        displayPokemonStats(data.stats);

    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        alert('Pokemon not found. Please try again.');
    }
}

function displayPokemonName(name) {
    document.getElementById('pokemonNameDisplay').textContent = name;
}

function displayPokemonImage(imageUrl) {
    document.getElementById('pokemonImage').src = imageUrl;
}

function displayPokemonAbilities(abilities) {
    const abilitiesList = document.getElementById('pokemonAbilities');
    abilitiesList.innerHTML = '';

    abilities.forEach(ability => {
        const listItem = document.createElement('li');
        listItem.textContent = ability.ability.name;
        abilitiesList.appendChild(listItem);
    });
}

function displayPokemonStats(stats) {
    const statsList = document.getElementById('pokemonStats');
    statsList.innerHTML = '';

    stats.forEach(stat => {
        const listItem = document.createElement('li');
        listItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsList.appendChild(listItem);
    });
}