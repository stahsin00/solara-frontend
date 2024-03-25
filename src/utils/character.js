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
        const { message } = await response.json();
        throw new Error(message);
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
        const { message } = await response.json();
        throw new Error(message);
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
            const { message } = await response.json();
            throw new Error(message);
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
        const { message } = await response.json();
        throw new Error(message);
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
        const { message } = await response.json();
        throw new Error(message);
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
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function characterRemoveTeam(userId, characterId) {
    const apiUrl = `${baseUrl}/removefromteam/${userId}/${characterId}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
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
        const { message } = await response.json();
        throw new Error(message);
    }
}