const baseUrl = `${process.env.REACT_APP_SERVER_URL}/quest`;

export async function questList() {
    const apiUrl = `${baseUrl}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: "include"
    });

    if (response.ok) {
        const tasks = await response.json();
        return tasks;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function questComplete(taskId) {
    const apiUrl = `${baseUrl}/complete/${taskId}`;

    const response = await fetch(apiUrl, {
        method: 'PATCH',
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error('unable to complete task');
    }
}

export async function questDelete(taskId) {
    const apiUrl = `${baseUrl}/${taskId}`;

    const response = await fetch(apiUrl, {
        method: 'DELETE',
        credentials: "include"
    });

    if (!response.ok) {
        const {message} = await response.json();
        throw new Error(message);
    }
}

export async function questCreate(newTask) {
    const apiUrl = `${baseUrl}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        credentials: "include",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    });

    if (response.ok) {
        const {message} = await response.json();
        return message;

    } else {
        const {message} = await response.json();
        throw new Error(message);
    }
}