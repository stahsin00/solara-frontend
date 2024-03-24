export async function characterList() {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/characters/all`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const characters = await response.json();
        return characters;
    } else {
        throw new Error('unable to fetch character list')
    }
}

export async function userCharacterList(userId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/characters/${userId}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const characters = await response.json();
        return characters;
    } else {
        throw new Error('unable to fetch character list')
    }
}

export async function characterBuy(userId, characterId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/addcharacter/${userId}/${characterId}`;
  
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
        });
  
        if (!response.ok) {
            throw new Error('unable to fetch character info')
        } 
}

export async function characterLevel(userId, characterId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/levelcharacter/${userId}/${characterId}`;
  
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('unable to level character');
    }
}

export async function userCharacterInfo(userId, characterId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/characterinfo/${userId}/${characterId}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error('unable to fetch character info');
    }
}

export async function characterAddTeam(userId, characterId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/addtoteam/${userId}/${characterId}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('unable to add to team');
    }
}

export async function userTeam(userId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/getteam/${userId}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const characters = await response.json();
        return characters;
    } else {
        throw new Error('unable to fetch character list')
    }
}