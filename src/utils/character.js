const baseUrl = `${process.env.REACT_APP_SERVER_URL}/character`;

export async function characterList() {
    const apiUrl = `${baseUrl}`;

    const response = await fetch(apiUrl, {
        method: 'GET'
    });

    if (response.ok) {
        const characters = await response.json();
        return characters;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function userCharacterList() {
    const apiUrl = `${baseUrl}/user`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: "include"
    });

    if (response.ok) {
        const characters = await response.json();
        return characters;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function characterBuy(characterId) {
    const apiUrl = `${baseUrl}/add/${characterId}`;
  
        const response = await fetch(apiUrl, {
            method: 'POST',
            credentials: "include"
        });
  
        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message);
        } 
}

export async function characterLevel(characterId) {
    const apiUrl = `${baseUrl}/level/${characterId}`;
  
    const response = await fetch(apiUrl, {
        method: 'PATCH',
        credentials: "include"
    });

    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function userCharacterInfo(characterId) {
    const apiUrl = `${baseUrl}/user/${characterId}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: "include"
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function characterAddTeam(characterId, position) {
    const apiUrl = `${baseUrl}/addtoteam/${characterId}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ position })
    });

    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function characterRemoveTeam(position) {
    const apiUrl = `${baseUrl}/removefromteam`;

    const response = await fetch(apiUrl, {
        method: 'PATCH',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ position })
    });

    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function userTeam() {
    const apiUrl = `${baseUrl}/team`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: "include"
    });

    if (response.ok) {
        const characters = await response.json();
        return characters;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}