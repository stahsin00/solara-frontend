export async function questList(userId) {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/tasks/${userId}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const { tasks } = await response.json();
        return tasks;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}