const baseUrl = `${process.env.REACT_APP_SERVER_URL}/world`;

export async function worldInfo() {
    const apiUrl = `${baseUrl}/gameinfo`;
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

export async function worldStart(hours, minutes) {
    const apiUrl = `${baseUrl}/startgame`;
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

export async function worldStop() {
    const apiUrl = `${baseUrl}/stopgame`;
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