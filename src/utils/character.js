const baseUrl = `${process.env.REACT_APP_SERVER_URL}/characters`;

export async function characterList() {
    const apiUrl = `${baseUrl}/all`;

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
    const apiUrl = `${baseUrl}/characters/${userId}`;

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
    const apiUrl = `${baseUrl}/addcharacter/${userId}/${characterId}`;
  
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
    const apiUrl = `${baseUrl}/levelcharacter/${userId}/${characterId}`;
  
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
    const apiUrl = `${baseUrl}/characterinfo/${userId}/${characterId}`;

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
    const apiUrl = `${baseUrl}/addtoteam/${userId}/${characterId}`;

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
    const apiUrl = `${baseUrl}/getteam/${userId}`;

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