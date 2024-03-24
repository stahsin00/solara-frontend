const baseUrl = `${process.env.REACT_APP_SERVER_URL}/world`;

export async function worldInfo(userId) {
    const apiUrl = `${baseUrl}/gameinfo/${userId}`;
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
        throw new Error(`Failed to fetch game info: ${response.statusText}`);
    }
}

export async function worldStart(userId, hours, minutes) {
    const apiUrl = `${baseUrl}/startgame/${userId}`;
    const data = {hours: hours, minutes: minutes};
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error(`Failed to fetch game info: ${response.statusText}`)
    }
}

export async function worldStop(userId) {
    const apiUrl = `${baseUrl}/stopgame/${userId}`;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error(`Failed to fetch game info: ${response.statusText}`);
    }
}