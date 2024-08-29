const baseUrl = `${process.env.REACT_APP_SERVER_URL}/game`;

export async function gameCreate(hours, minutes, questId) {

    const minutesTotal = minutes + (hours * 60);
    const data = { id: questId, minutes: minutesTotal };

    const response = await fetch(baseUrl, {
        method: 'POST',
        credentials: "include",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
    } else {
        throw new Error(`Failed to create game: ${response.statusText}`)
    }
}