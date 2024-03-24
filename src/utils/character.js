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